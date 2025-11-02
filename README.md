# B SQUARE GLOBAL - BIM Consulting Website

## Overview
Professional, modern multi-page website for B SQUARE GLOBAL, a leading BIM consulting and services company with 20+ years of expertise in the UAE.

## Features
- **Multi-page Architecture**: Home, About Us, Services, Portfolio, Contact
- **Modern UI/UX**: Inspired by corporate design with smooth animations and transitions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Contact Form**: Integrated with Nodemailer for email functionality
- **Service Categories**: Comprehensive showcase of all BIM services
- **Portfolio Section**: Major projects with detailed information
- **Professional Animations**: Scroll animations, parallax effects, hover transitions

## Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Animations**: Custom CSS animations + Intersection Observer

## Pages

### 1. Home Page
- Hero section with parallax effect
- Company statistics
- Service overview
- Portfolio preview
- Call-to-action sections

### 2. About Us
- Company overview and history
- Vision and mission
- Core values
- Leadership team (Founder: Bijal Shah)
- Achievement metrics

### 3. Services
- Interactive service category tabs
- Core BIM Services
- BIM with Visualization & Reality
- Coordination & Data Management
- Consulting & Training
- BIM Manpower Outsourcing

### 4. Portfolio
- Dilip Buildcon
- Al Maktoum International Airport
- EMAAR SOUTH
- Wasl Gate By LMD

### 5. Contact
- Contact form with validation
- Email functionality via Nodemailer
- Contact information
- Business hours

## Setup Instructions

### Installation
```bash
yarn install
```

### Email Configuration
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure SMTP settings in `.env`:

#### For Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=Bhavin.s@bsquareglobalfze.com,Mohan.b@bsquareglobalfze.com
```

**Gmail Setup:**
- Enable 2-factor authentication on your Google account
- Generate an app password: https://myaccount.google.com/apppasswords
- Use the app password as `SMTP_PASS`

#### For Other Email Providers:
Adjust SMTP settings according to your provider's documentation.

### Running the Application
```bash
# Development
yarn dev

# Production
yarn build
yarn start
```

## Email Service Setup Guide

### Option 1: Gmail
1. Go to Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file

### Option 2: SendGrid
1. Sign up at https://sendgrid.com
2. Get your API key
3. Update `.env` with SendGrid SMTP settings:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   ```

### Option 3: Custom SMTP
Contact your email hosting provider for SMTP settings.

## Contact Form Behavior
- If SMTP credentials are **not configured**: Form submissions are logged to console, and user sees a success message
- If SMTP credentials **are configured**: Emails are sent to the configured addresses

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server hostname | No |
| `SMTP_PORT` | SMTP server port | No |
| `SMTP_SECURE` | Use TLS (true/false) | No |
| `SMTP_USER` | SMTP username/email | No |
| `SMTP_PASS` | SMTP password | No |
| `SMTP_FROM` | From email address | No |
| `CONTACT_EMAIL` | Recipient email(s) | No |

## Project Structure
```
/app
├── app/
│   ├── api/
│   │   └── [[...path]]/
│   │       └── route.js          # API routes (contact form)
│   ├── about/
│   │   └── page.js               # About Us page
│   ├── services/
│   │   └── page.js               # Services page
│   ├── portfolio/
│   │   └── page.js               # Portfolio page
│   ├── contact/
│   │   └── page.js               # Contact page
│   ├── page.js                   # Home page
│   ├── layout.js                 # Root layout with nav & footer
│   └── globals.css               # Global styles
├── components/
│   └── ui/                       # shadcn/ui components
├── .env                          # Environment variables (create from .env.example)
├── .env.example                  # Example environment variables
└── package.json
```

## Design Features
- **Color Scheme**: Dark blue (#1e40af), slate (#0f172a), white
- **Typography**: Inter font family
- **Animations**: Fade-in-up, parallax scrolling, hover effects
- **Components**: Cards, buttons, inputs with consistent styling
- **Responsive**: Mobile-first approach with breakpoints

## Support
For questions or support, contact:
- **Email**: Bhavin.s@bsquareglobalfze.com, Mohan.b@bsquareglobalfze.com
- **Phone**: +971 563045152
- **Website**: www.bsquareglobalfze.com

## License
Copyright © 2024 B Square Global. All rights reserved.