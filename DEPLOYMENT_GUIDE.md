# GitHub Pages & Custom Domain Deployment Guide

## Prerequisites
- GitHub account
- GoDaddy domain

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a repository named `bizmaster-ui`
3. Choose "Public" (required for free GitHub Pages)
4. Click "Create repository"

## Step 2: Initialize Git & Push Code

```bash
cd /home/mohit/projects/bizmaster-ui
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bizmaster-ui.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - The workflow will automatically deploy on each push to `main`

## Step 4: Connect Custom GoDaddy Domain

### Option A: Using GoDaddy DNS (Recommended)

1. Go to your **GoDaddy Domain Management**
2. Find **DNS Management** → **DNS Records**
3. Add these records:
   - **Type**: A record
     - **Name**: @
     - **Value**: `185.199.108.153`
   - **Type**: A record
     - **Name**: @
     - **Value**: `185.199.109.153`
   - **Type**: A record
     - **Name**: @
     - **Value**: `185.199.110.153`
   - **Type**: A record
     - **Name**: @
     - **Value**: `185.199.111.153`
   - **Type**: CNAME record
     - **Name**: www
     - **Value**: `YOUR_USERNAME.github.io`

4. Go back to GitHub Repository Settings → Pages
5. Under "Custom domain", enter your domain (e.g., `yourdomain.com`)
6. Check "Enforce HTTPS"

### Option B: Using CNAME File (Simpler)

A CNAME file has been created in your public folder. GitHub automatically handles the DNS validation.

1. Create/Update `/public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. In GitHub Repository Settings → Pages:
   - Custom domain: Enter `yourdomain.com`
   - Check "Enforce HTTPS"

3. At GoDaddy, set up DNS to point to GitHub Pages:
   - Add A records (as listed in Option A)
   - Or add CNAME record for www subdomain

## Step 5: Verify Deployment

- GitHub Pages: https://YOUR_USERNAME.github.io/bizmaster-ui/
- Custom Domain: https://yourdomain.com (after DNS propagates, ~24 hours)

## Troubleshooting

**DNS Not Propagating**: Can take up to 24-48 hours
**Build Failed**: Check Actions tab for logs
**HTTPS Not Working**: 
  - Wait for certificate generation (1-5 mins)
  - Refresh settings page

## Update Vite Config if Using Custom Domain Only

If using ONLY your custom domain (not the GitHub Pages subdirectory), update vite.config.ts:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change from '/bizmaster-ui/'
})
```

Then rebuild and push to GitHub.
