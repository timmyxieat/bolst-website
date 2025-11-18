# Deployment Guide

## Deploy to Vercel

### 1. Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 2. Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign in**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Add Environment Variables:**
   Click "Environment Variables" and add:
   - `SENDFOX_API_KEY` = your SendFox API key
   - `SENDFOX_LIST_ID` = your SendFox list ID

7. **Click "Deploy"**

### 3. Deploy via CLI (Alternative)

```bash
vercel

Vercel will prompt you for:
- Set up and deploy? Yes
- Which scope? (your account)
- Link to existing project? No
- Project name: bolst-waitlist
- Directory: ./
- Override settings? No

# Add environment variables
vercel env add SENDFOX_API_KEY
vercel env add SENDFOX_LIST_ID

# Deploy to production
vercel --prod
```

## Deploy to Netlify

### Via Netlify Dashboard

1. **Push to GitHub** (same as Vercel step 1 above)

2. **Go to [netlify.com](https://netlify.com) and sign in**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub and select your repository**

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

6. **Add Environment Variables:**
   Go to Site settings → Environment variables and add:
   - `SENDFOX_API_KEY`
   - `SENDFOX_LIST_ID`

7. **Click "Deploy site"**

## Testing Production Build Locally

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# In another terminal, run the API server
npm run dev:api

# Open http://localhost:4173 to test
```

## Troubleshooting

### "Configuration error" in production
- Make sure environment variables are set in Vercel/Netlify dashboard
- Redeploy after adding environment variables

### Form not submitting
- Check browser console for errors
- Verify API endpoint is accessible (check Network tab)
- Check deployment logs for serverless function errors

### CORS errors
- The Vercel function already has CORS headers configured
- Make sure you're accessing the site via the proper domain (not mixing http/https)

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed
