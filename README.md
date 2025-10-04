# E-commerce Frontend

A modern, full-featured e-commerce frontend application built with Next.js 15, TypeScript, Shadcn UI, and TanStack React Query.

## 🚀 Features

- **Product Catalog**: Browse products with pagination, search, and filtering
- **Product Details**: Comprehensive product information with image display
- **Shopping Cart**: Add/remove items, update quantities with persistent storage
- **Checkout**: Simple checkout flow with order creation
- **Order Management**: Track orders by email and view order history
- **Responsive Design**: Mobile-first approach with modern UI components
- **Type Safety**: Full TypeScript implementation
- **Client-Side Rendering**: Optimized for performance and user experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager
- The Django REST backend running at `http://localhost:8000`

## 🛠️ Installation

1. **Clone the repository** (if not already done):
   ```bash
   cd /home/dakshay/Learnings/Ecommerce/ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   
   The `.env.local` file should already be created with:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
   ```

4. **Verify backend is running**:
   
   Ensure your Django backend is running at `http://localhost:8000` before starting the frontend.

## 🏃 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

```bash
npm run build
npm run start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
ecommerce/
├── app/                          # Next.js app directory
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout page
│   ├── orders/                   # Order management pages
│   ├── products/                 # Product catalog and detail pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── providers.tsx             # React Query provider
├── components/                   # React components
│   ├── layout/                   # Layout components (Header, Footer)
│   ├── products/                 # Product-related components
│   └── ui/                       # Shadcn UI components
├── hooks/                        # Custom React hooks
│   └── useCart.ts                # Cart management hook
├── lib/                          # Utility libraries
│   ├── api.ts                    # API client functions
│   ├── cart.ts                   # Cart storage utilities
│   └── utils.ts                  # General utilities
├── types/                        # TypeScript type definitions
│   └── index.ts                  # All type interfaces
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── components.json               # Shadcn UI configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

## 🎨 Key Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **UI Components**: Shadcn UI (built on Radix UI)
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query
- **State Management**: React hooks + localStorage for cart
- **Icons**: Lucide React

## 🔧 Available Shadcn Components

The following Shadcn UI components are pre-installed:

- Button
- Card
- Input
- Label
- Badge
- Toast/Toaster
- Dialog
- Dropdown Menu
- Select
- Separator

To add more Shadcn components:

```bash
npx shadcn@latest add [component-name]
```

## 📡 API Integration

The application integrates with the Django REST backend at `http://localhost:8000/api/`.

### Available Endpoints:

- **Products**:
  - `GET /products/` - List products (paginated)
  - `GET /products/{id}/` - Get product details
  - `GET /products/search/?q={query}` - Search products
  - `GET /products/in-stock/` - Get in-stock products

- **Orders**:
  - `POST /orders/` - Create new order
  - `GET /orders/{id}/` - Get order details
  - `GET /orders/by-email/?email={email}` - Get orders by email

- **Cart**:
  - `POST /cart/add/` - Add to cart (simulation)

## 🎯 Usage Guide

### Browse Products
1. Navigate to `/products` or click "Products" in the header
2. Use the search bar to find specific products
3. Click on any product card to view details

### Add to Cart
1. On a product detail page, select quantity
2. Click "Add to Cart"
3. View cart by clicking the cart icon in the header

### Checkout
1. From the cart page, click "Proceed to Checkout"
2. Fill in shipping information
3. Review order summary
4. Click "Place Order"

### Track Orders
1. Navigate to `/orders`
2. Enter your email address
3. View all orders associated with that email
4. Click on any order to see full details

## 🎨 Customization

### Theming

Modify colors in `app/globals.css` and `tailwind.config.ts`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... other variables */
}
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. The route is automatically created based on the folder name

### Custom Hooks

Add reusable hooks in the `hooks/` directory:

```typescript
// hooks/useProducts.ts
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: productApi.getAll,
  });
}
```

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | `http://localhost:8000/api` |

## 🐛 Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure the Django backend has the frontend URL in its CORS whitelist:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
```

### API Connection Issues
1. Verify the backend is running: `http://localhost:8000/swagger/`
2. Check the `.env.local` file has the correct API URL
3. Ensure there are no firewall rules blocking the connection

### Build Errors
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check for TypeScript errors: `npm run lint`

## 📝 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow TypeScript strict mode conventions
- Implement proper error handling
- Add loading states for async operations
- Use Tailwind utility classes for styling

### Component Organization
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for all props
- Implement proper accessibility (ARIA labels)

### State Management
- Use React Query for server state
- Use React hooks (useState, useContext) for client state
- Persist cart data in localStorage
- Implement optimistic updates where appropriate

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## 📄 License

This project is created for learning purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions:
- Check the [API Documentation](http://localhost:8000/swagger/)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Consult the [Shadcn UI Documentation](https://ui.shadcn.com/)

---

Built with ❤️ using Next.js, TypeScript, and Shadcn UI
