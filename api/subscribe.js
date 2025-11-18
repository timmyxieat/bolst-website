export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email is required',
    });
  }

  const apiKey = process.env.SENDFOX_API_KEY;
  const listId = process.env.SENDFOX_LIST_ID;

  if (!apiKey || !listId) {
    console.error('SendFox credentials missing');
    return res.status(500).json({
      success: false,
      message: 'Server configuration error',
    });
  }

  try {
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('lists[]', listId);

    const response = await fetch('https://api.sendfox.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (response.ok) {
      return res.json({
        success: true,
        message: 'Successfully joined the waitlist!',
      });
    } else if (response.status === 422 && data.errors?.email?.includes('already been taken')) {
      return res.json({
        success: false,
        message: 'This email is already on the waitlist.',
      });
    } else {
      return res.status(response.status).json({
        success: false,
        message: data.message || 'Failed to join waitlist',
      });
    }
  } catch (error) {
    console.error('SendFox API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
}
