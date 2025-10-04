# Quick Setup Guide

Follow these steps to get the e-commerce frontend up and running.

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI components
- TanStack React Query
- All required dependencies

## Step 2: Verify Environment Variables

The `.env.local` file should already exist with:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

If it doesn't exist, create it with the above content.

## Step 3: Ensure Backend is Running

Make sure your Django REST backend is running at `http://localhost:8000`.

You can verify by visiting:
- API: http://localhost:8000/api/
- Swagger Docs: http://localhost:8000/swagger/

## Step 4: Start Development Server

```bash
npm run dev
```

The application will start at http://localhost:3000

## Step 5: Verify Installation

1. Open http://localhost:3000 in your browser
2. You should see the home page
3. Navigate to "Products" to see the product catalog
4. Try adding items to the cart
5. Test the checkout flow

## Common Issues

### Backend Connection Error
- **Issue**: Cannot connect to API
- **Solution**: Ensure Django backend is running and CORS is configured

### Missing Dependencies
- **Issue**: Module not found errors
- **Solution**: Run `npm install` again

### Port Already in Use
- **Issue**: Port 3000 is already in use
- **Solution**: Run `npx kill-port 3000` or use a different port with `npm run dev -- -p 3001`

## Next Steps

1. Read the full README.md for detailed documentation
2. Explore the codebase structure
3. Customize the theme in `app/globals.css`
4. Add more Shadcn components as needed: `npx shadcn@latest add [component]`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure Overview

```
app/          → Pages and routes
components/   → Reusable UI components
hooks/        → Custom React hooks
lib/          → Utilities and API client
types/        → TypeScript definitions
```

That's it! You're ready to start developing. 🚀

