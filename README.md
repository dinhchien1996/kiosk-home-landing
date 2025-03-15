# Kiosk Home Landing

A modern appointment booking system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📅 Interactive calendar for date selection
- 🕒 Time slot booking system
- 👨‍⚕️ Department selection
- 📝 Comprehensive patient information form
- ✅ Form validation
- 🔔 Toast notifications
- 🌙 Dark mode support
- 📱 Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Radix UI
- FullCalendar
- date-fns
- Sonner (Toast notifications)

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd kiosk-home-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Deployment

### Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to Vercel
3. Vercel will detect it as a Next.js app and set up the build configuration automatically
4. Click "Deploy"

### Deploy on other platforms

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── app/                # App router pages
├── components/         # React components
│   ├── booking/       # Booking related components
│   └── ui/            # UI components
├── lib/               # Utility functions
└── styles/            # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
