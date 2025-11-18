export interface SendFoxResponse {
  success: boolean;
  message?: string;
}

export async function addToWaitlist(email: string): Promise<SendFoxResponse> {
  try {
    const apiUrl = import.meta.env.DEV
      ? 'http://localhost:3002/api/subscribe'
      : '/api/subscribe';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: data.success !== false,
        message: data.message || 'Successfully joined the waitlist!',
      };
    } else {
      return {
        success: false,
        message: data.message || 'Failed to join waitlist. Please try again.',
      };
    }
  } catch (error) {
    console.error('API error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
