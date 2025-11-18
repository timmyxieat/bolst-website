import type { Handler, HandlerEvent } from '@netlify/functions';

export const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    const apiKey = process.env.SENDFOX_API_KEY;
    const listId = process.env.SENDFOX_LIST_ID;

    if (!apiKey || !listId) {
      console.error('SendFox credentials missing');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Format the request body as form data
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
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Successfully joined the waitlist!'
        }),
      };
    } else if (response.status === 422 && data.errors?.email?.includes('already been taken')) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: false,
          message: 'This email is already on the waitlist.'
        }),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          success: false,
          message: data.message || 'Failed to join waitlist'
        }),
      };
    }
  } catch (error) {
    console.error('SendFox API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Server error. Please try again.'
      }),
    };
  }
};
