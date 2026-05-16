# Deployment Guide

This portfolio supports deployment on both **Vercel** and **Netlify**.

## 🚀 Quick Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CodesRahul96/CodesRahul)

**Steps:**

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Vercel will automatically detect the build settings
4. Click "Deploy"
5. Your site will be live in minutes!

**Configuration:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CodesRahul96/CodesRahul)

**Steps:**

1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Netlify will use the `netlify.toml` configuration
4. Click "Deploy site"
5. Your site will be live!

**Configuration:**

- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 18 or higher

## 📋 Manual Deployment

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Build Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel (CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify (CLI)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## ⚙️ Configuration Files

- **vercel.json** - Vercel configuration with SPA routing and security headers
- **netlify.toml** - Netlify configuration with build settings and redirects

## 🔧 Environment Variables

No environment variables are required for this project. All configuration is done through the config files.

## 📝 Notes

- Both platforms automatically detect Vite projects
- SPA routing is configured for React Router
- Security headers are enabled on both platforms
- Static assets are cached for optimal performance

## 🌐 Custom Domain

### Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

## 📊 Performance

Both platforms offer:

- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Instant cache invalidation
- ✅ Edge network optimization
- ✅ Automatic deployments on Git push

Choose the platform that best fits your workflow!
