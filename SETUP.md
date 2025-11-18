# Bolst Pillows Waitlist Setup Guide

## SendFox Integration Setup

### 1. Get Your SendFox API Credentials

1. Log in to your [SendFox account](https://sendfox.com/)
2. Go to **Settings** → **API**
3. Create a new API token and copy it
4. Go to **Lists** and note the ID of the list you want to use (it's in the URL when viewing a list)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   VITE_SENDFOX_API_KEY=your_actual_api_key_here
   VITE_SENDFOX_LIST_ID=your_actual_list_id_here
   ```

   **Important:** Never commit the `.env` file to version control!

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Test the Waitlist

1. Open the app in your browser
2. Enter an email address in the form
3. Click "Join Waitlist"
4. You should see a success message
5. Check your SendFox list to verify the email was added

## Features Implemented

✅ **Email Validation** - Validates email format before submission
✅ **Loading States** - Shows "Joining..." text while processing
✅ **Success/Error Messages** - Toast notifications for user feedback
✅ **Duplicate Prevention** - SendFox automatically handles duplicate emails
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Disabled States** - Form is disabled during submission

## Troubleshooting

### "Configuration error" message
- Make sure your `.env` file exists and contains both `VITE_SENDFOX_API_KEY` and `VITE_SENDFOX_LIST_ID`
- Restart the dev server after creating/modifying `.env`

### "Network error" message
- Check your internet connection
- Verify your API key is valid in SendFox settings
- Check browser console for detailed error messages

### Email not appearing in SendFox
- Verify the List ID is correct
- Check SendFox's "Unsubscribed" list - the email might be there
- Look in SendFox's activity log for the contact

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

**Important:** Make sure your production environment has the environment variables set!
