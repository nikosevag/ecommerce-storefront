# ShopHub - E-commerce Storefront

A modern, beautiful e-commerce storefront built with React, TypeScript, Vite, and Zustand. This application demonstrates a clean separation of concerns with local UI state for product data and global state management for the shopping cart, featuring a professional design with slide-out cart functionality.

## 🚀 Features

- **Product Catalog**: Browse products fetched from the FakeStore API
- **Category Navigation**: Dynamic dropdown navigation with category filtering
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add, remove, and manage quantities of products
- **Slide-out Cart Sheet**: Beautiful right-slide cart preview with full functionality
- **Checkout Process**: Complete multi-step checkout with shipping and payment forms
- **Order Confirmation**: Professional order completion flow with order tracking
- **Persistent Cart**: Cart data is saved to localStorage with Zustand persistence
- **Cart Animations**: Visual feedback with badge animations and loading states
- **Modern UI**: Professional design with Lucide React icons and smooth animations
- **Sticky Header**: Always-accessible navigation with responsive design
- **Error Handling**: Comprehensive error boundaries and loading states
- **Form Validation**: Real-time validation with European address formats
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Fast Development**: Powered by Vite 7 with Rolldown bundler

## 🏗️ Architecture

### State Management Strategy

The application uses a clear separation of concerns for state management:

1. **Local State (useState)**: Used for UI state and data fetching
   - Product lists on the homepage and category pages
   - Individual product details and loading states
   - Form inputs and validation states
   - Loading and error states for API calls

2. **Global State (Zustand)**: Used for cart management and persistence
   - Cart items with quantities and pricing
   - Cart operations (add, remove, update quantities)
   - Persistent storage with localStorage middleware
   - Efficient re-rendering with optimized selectors

3. **Custom Hooks**: Reusable logic extraction
   - Cart animation states and feedback
   - API integration patterns
   - Form handling utilities

### Key Design Decisions

- **Derived State**: Cart totals and item counts are calculated on-demand for efficiency
- **Efficient Selectors**: Components only re-render when relevant data changes
- **Type Safety**: Full TypeScript coverage for all data structures and API responses
- **Component Separation**: Reusable components with clear props interfaces
- **Custom Hooks**: Extracted animation logic into reusable hooks
- **Error Boundaries**: Comprehensive error handling at the router level
- **Persistence Strategy**: Cart state automatically saved to localStorage
- **API Integration**: Centralized API layer with proper error handling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ProductCard.tsx   # Product display card with cart functionality
│   ├── CartItemRow.tsx   # Individual cart item component
│   ├── CartSheet.tsx     # Slide-out cart preview sheet
│   ├── Header.tsx        # Sticky site header with navigation
│   ├── Layout.tsx        # App layout wrapper with background
│   ├── Logo.tsx          # ShopHub logo
│   ├── MiniCart.tsx      # Cart icon with slide-out functionality and badge animations
│   ├── Nav.tsx           # Navigation with category dropdown and Lucide icons
│   └── pages/            # Page components
│       ├── Home.tsx      # Product listing homepage
│       ├── CategoryPage.tsx # Category-filtered product listing
│       ├── ProductDetailPage.tsx # Individual product view with cart animation
│       ├── CartPage.tsx  # Shopping cart management page
│       ├── CheckoutPage.tsx # Multi-step checkout with payment simulation
│       ├── About.tsx     # Portfolio showcase about page
│       └── Error.tsx     # Error boundary with 404 handling
├── hooks/               # Custom React hooks
│   └── useCartAnimation.ts # Cart addition animations and feedback
├── lib/                 # Utility libraries
│   └── api.ts          # FakeStore API functions with error handling
├── store/              # State management
│   └── cartStore.ts    # Zustand cart store with persistence and selectors
├── types/              # TypeScript type definitions
│   └── product.ts      # Product and CartItem interfaces
├── App.tsx             # Main app with React Router setup
├── main.tsx            # Application entry point
└── index.css           # Global styles with custom scrollbar
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 (Rolldown)
- **Routing**: React Router 7 (Data Mode) with error boundaries
- **State Management**: Zustand with persistence middleware and optimized selectors
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React for beautiful, consistent icons
- **HTTP Client**: Axios with error handling
- **API**: FakeStore API for product data
- **Package Manager**: pnpm for efficient dependency management

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `pnpm run dev` - Start development server with hot module replacement
- `pnpm run build` - Build for production with TypeScript compilation
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint with TypeScript and React rules

### Development Configuration

The project uses modern development tools:

- **ESLint 9** with TypeScript and React plugins for code quality
- **TypeScript 5.9** with strict type checking and project references
- **Vite 7** with Rolldown bundler for fast builds and HMR
- **Tailwind CSS 4** with Vite plugin for optimal performance
- **pnpm** with overrides for bleeding-edge Vite version

## 🔧 API Integration

The application uses the [FakeStore API](https://fakestoreapi.com) for product data:

- `GET /products` - Fetch all products for homepage
- `GET /products/{id}` - Fetch individual product details
- `GET /products/categories` - Fetch available categories for navigation
- `GET /products/category/{category}` - Fetch products filtered by category

## 🎯 Key Features Explained

### Dynamic Category Navigation

The navigation system features a modern dropdown that:

- **Fetches categories dynamically** from the FakeStore API
- **Shows loading states** with spinner animations
- **Highlights active category** with blue styling
- **Responsive design** that works on mobile and desktop
- **Closes on route changes** for better UX
- **Handles category names** with proper capitalization

### Checkout Process

The checkout system provides a comprehensive e-commerce experience:

- **Multi-step Process** - Clean separation between shipping and payment information
- **Form Validation** - Real-time validation with proper error handling
- **Payment Simulation** - Realistic payment processing with loading states
- **Order Confirmation** - Professional completion flow with order tracking numbers
- **Responsive Design** - Mobile-optimized checkout experience
- **Security Features** - Visual security indicators and form protection
- **European Localization** - Optimized for Greek and Cypriot customers

#### 🏪 Checkout Flow Features

- **Progressive Steps** with visual progress indicators
- **Form Validation** with required field highlighting
- **Payment Processing** simulation with loading states and card formatting
- **Order Summary** sidebar with real-time calculations
- **Security Assurance** messaging for user confidence
- **Order Confirmation** with tracking number generation
- **Tax and Shipping** calculations with free shipping over $50

### Cart Management with Animations

The cart system includes advanced features:

- `addItem(product)` - Add product to cart or increment quantity
- `removeItem(productId)` - Remove item completely from cart
- `updateQuantity(productId, quantity)` - Update item quantity
- `clearCart()` - Empty the entire cart
- **Badge Animations** - Visual feedback when items are added
- **Loading States** - Smooth transitions during cart operations
- **Persistence** - Automatic localStorage saving

### Beautiful UI Components

#### 🛒 Slide-out Cart Sheet

- **Right-slide animation** when cart icon is clicked
- **Real-time cart preview** with product images and details
- **Quantity controls** with beautiful +/- buttons
- **Remove items functionality** with trash icon
- **Total price calculation** displayed prominently
- **"View Full Cart" button** for full cart page navigation

#### 🧭 Enhanced Navigation

- **Dynamic category dropdown** with FakeStore API integration
- **Lucide icons** for all navigation items (Home, Categories, About)
- **Active state styling** with blue backgrounds
- **Responsive design** - adaptive for mobile and desktop
- **Smooth hover effects** and professional styling

#### 📱 Sticky Header Design

- **Always visible** header that stays at top during scroll
- **Clean layout** with proper spacing and shadows
- **Responsive positioning** of logo, navigation, and cart

### Product Display & Interaction

#### Product Cards

- **High-quality images** with fallback handling
- **Price display** with proper formatting
- **Quick add to cart** with visual feedback
- **Category badges** for easy identification
- **Hover effects** and smooth animations

#### Product Detail Pages

- **Comprehensive product information** display
- **Large product images** with optimized loading
- **Animated cart additions** with success feedback
- **Category link navigation** to view related category products
- **Back to products** quick navigation link

#### Cart Management Pages

- **Full Cart Page** - Complete cart management with item list
- **Quantity Controls** - Increment/decrement buttons and direct input
- **Item Removal** - Individual item deletion with confirmation
- **Clear Cart** - Empty entire cart functionality
- **Cart Summary** - Real-time totals with tax and shipping calculation
- **Empty State** - Helpful messaging when cart is empty
- **Checkout Navigation** - Seamless transition to checkout process

### Error Handling & Loading States

#### Comprehensive Error Management

- **API error handling** with user-friendly messages
- **404 page** with navigation options
- **Loading skeletons** for better perceived performance
- **Retry mechanisms** for failed requests
- **Graceful degradation** when services are unavailable

### Efficient Re-rendering

The app uses Zustand selectors to minimize re-renders:

- `useCartTotalItems()` - Only re-renders when total item count changes
- `useCartTotalPrice()` - Only re-renders when total price changes
- **Derived state calculations** - Computed on-demand for efficiency
- **Optimized component updates** - Selective state subscriptions

### Responsive Design

The application is fully responsive with:

- **Mobile-first design** approach with Tailwind CSS 4
- **Flexible grid layouts** for product displays that adapt to screen size
- **Touch-friendly interface** elements with proper sizing and spacing
- **Adaptive navigation** that works seamlessly on all screen sizes
- **Optimized cart sheet** that slides in from the right on all devices
- **Professional sticky header** that adapts to screen width
- **Responsive product cards** with proper aspect ratios and hover effects
- **Mobile-optimized checkout** with single-column forms on small screens
- **Responsive typography** that scales appropriately across devices

## 🎨 Styling & Design

The project uses modern design principles with:

- **Tailwind CSS 4** utility-first approach
- **Lucide React icons** for consistent, beautiful iconography
- **Smooth animations** and hover effects throughout
- **Professional color scheme** with blue primary colors
- **Clean shadows and borders** for depth and separation
- **Custom scrollbar styling** for better user experience
- **Responsive spacing** and typography

## 📄 License

This project is licensed under the MIT License.
