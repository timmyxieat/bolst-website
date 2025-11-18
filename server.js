import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
