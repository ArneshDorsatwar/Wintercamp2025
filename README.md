# BestBrains Winter Camp Website

A clean, kid-friendly, winter-themed website showcasing the 5-day BestBrains Winter Camp schedule for AI & ML learning.

## Features

- 🎨 Winter-themed design with cool colors and soft shadows
- 📱 Fully responsive mobile-friendly layout
- 📊 Interactive daily schedule tables
- 🎯 Clear learning goals and concepts for each day
- ⚡ Fast and optimized for Vercel deployment

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Import your project on [Vercel](https://vercel.com):
   - Go to https://vercel.com/new
   - Import your Git repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Deploy! Vercel will build and deploy your site automatically.

### Manual Vercel Deployment

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page with all sections
├── components/
│   ├── DaySection.tsx   # Reusable day section component
│   └── ScheduleTable.tsx # Schedule table component
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Customization

- Edit daily schedules in `app/page.tsx`
- Modify colors in `tailwind.config.js` (winter theme colors)
- Update content and text directly in `app/page.tsx`
- Adjust styling in component files or `app/globals.css`

## License

This project is created for BestBrains Winter Camp.

