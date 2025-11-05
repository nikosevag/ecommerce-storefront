import {
  Code,
  Palette,
  Zap,
  Globe,
  Database,
  Smartphone,
  Store,
  Heart,
  Star,
  CreditCard,
  Github,
} from 'lucide-react';

function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Hero Section */}
      <div className="space-y-6 py-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl bg-blue-600 p-4 shadow-lg">
            <Store className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="mb-4 text-5xl font-bold text-blue-600">About ShopHub</h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
          A modern e-commerce storefront showcasing advanced React development
          skills, complete checkout flow, and contemporary web technologies
        </p>
        <div className="flex flex-col justify-center gap-3 px-4 pt-4 sm:flex-row sm:gap-4">
          <div className="flex items-center justify-center gap-2 rounded-full bg-white px-3 py-2 shadow-md sm:px-4">
            <Code className="h-4 w-4 shrink-0 text-blue-500" />
            <span className="text-sm font-medium whitespace-nowrap text-gray-700">
              Portfolio Project
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-white px-3 py-2 shadow-md sm:px-4">
            <Zap className="h-4 w-4 shrink-0 text-yellow-500" />
            <span className="text-sm font-medium whitespace-nowrap text-gray-700">
              Modern Tech Stack
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-white px-3 py-2 shadow-md sm:px-4">
            <Star className="h-4 w-4 shrink-0 text-purple-500" />
            <span className="text-sm font-medium whitespace-nowrap text-gray-700">
              Best Practices
            </span>
          </div>
        </div>
      </div>

      {/* Portfolio Context */}
      <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold text-gray-900">
          <div className="rounded-lg bg-blue-100 p-2">
            <Code className="h-6 w-6 text-blue-600" />
          </div>
          Portfolio Project
        </h2>
        <div className="space-y-4 leading-relaxed text-gray-700">
          <p>
            ShopHub is a comprehensive e-commerce application built as a
            portfolio demonstration of modern web development practices. This
            project showcases proficiency in React ecosystem, state management,
            responsive design, user experience optimization, and complete
            e-commerce workflow implementation.
          </p>
          <p>
            Featuring a full checkout process with multi-step forms, payment
            simulation, and order confirmation, this application demonstrates
            the ability to handle complex user flows and form validation. The
            checkout system is optimized for European customers with localized
            address formats.
          </p>
          <p>
            Built with attention to detail, clean architecture, and industry
            best practices, this application demonstrates the ability to create
            production-ready web applications that users love to interact with.
          </p>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Technical Excellence
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Built with cutting-edge technologies and modern development
            practices
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend Technologies */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Frontend Technologies
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>React 19</strong> - Latest features and performance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>TypeScript</strong> - Type safety and developer
                  experience
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Tailwind CSS 4</strong> - Modern utility-first styling
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Lucide React</strong> - Beautiful, consistent
                  iconography
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>React Router 7</strong> - Advanced routing with data
                  mode
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Axios</strong> - Reliable HTTP client for API
                  communication
                </span>
              </li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-yellow-100 p-2">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Development Tools
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>
                  <strong>Vite 7</strong> - Lightning-fast build tool
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>
                  <strong>ESLint</strong> - Code quality and consistency
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>
                  <strong>pnpm</strong> - Efficient package management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>
                  <strong>Rolldown</strong> - Next-generation bundler
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>
                  <strong>Hot Module Replacement</strong> - Instant development
                  feedback
                </span>
              </li>
            </ul>
          </div>

          {/* State Management */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                State Management
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>
                  <strong>Zustand</strong> - Lightweight state management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>
                  <strong>LocalStorage Persistence</strong> - Data retention
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>
                  <strong>Efficient Selectors</strong> - Optimized re-rendering
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>
                  <strong>Derived State</strong> - Calculated values on-demand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>
                  <strong>Action Creators</strong> - Clean state updates
                </span>
              </li>
            </ul>
          </div>

          {/* User Experience */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                User Experience
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Responsive Design</strong> - Mobile-first approach
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Multi-step Checkout</strong> - Progressive form
                  completion
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Form Validation</strong> - Real-time input validation
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Smooth Animations</strong> - Engaging interactions
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Slide-out Cart</strong> - Intuitive shopping
                  experience
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Loading States</strong> - Clear user feedback
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>
                  <strong>Error Handling</strong> - Graceful failure management
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Key Features Demonstrated
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive showcase of modern e-commerce functionality and best
            practices
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                <Store className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Product Catalog & Shopping Cart
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Browse products fetched from the FakeStore API with detailed
                  product views. Complete shopping cart system with add, remove,
                  and quantity management. Cart data is saved to localStorage
                  for persistence across sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-indigo-100 p-3">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Complete Checkout Process
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Multi-step checkout flow with shipping and payment forms,
                  real-time validation, payment processing simulation, and
                  professional order confirmation. Features progressive steps,
                  security messaging, and optimized for Greek and Cypriot
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-green-100 p-3">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Slide-out Cart & Modern UI
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Beautiful right-slide cart preview with full functionality.
                  Professional design with Lucide React icons, smooth
                  animations, and sticky header with always-accessible
                  navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-purple-100 p-3">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  TypeScript & Fast Development
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Full type safety throughout the application with TypeScript.
                  Powered by Vite with hot module replacement for lightning-fast
                  development experience.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-yellow-100 p-3">
                <Palette className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Responsive Design & Performance
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Mobile-friendly interface with Tailwind CSS. Efficient state
                  management with Zustand selectors, optimized re-rendering, and
                  clean code architecture for maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Information */}
      <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold text-gray-900">
          <div className="rounded-lg bg-blue-100 p-2">
            <Globe className="h-6 w-6 text-blue-600" />
          </div>
          About the Developer
        </h2>
        <div className="space-y-4 leading-relaxed text-gray-700">
          <p>
            This application was crafted to demonstrate advanced React
            development skills and modern web technologies. It showcases the
            ability to build scalable, maintainable, and user-friendly web
            applications.
          </p>
          <p>
            Every aspect of this project—from architecture decisions to user
            interface design— reflects a commitment to excellence in web
            development and creating outstanding digital experiences.
          </p>
        </div>
      </div>

      {/* Contact/Portfolio Link Section */}
      <div className="space-y-6 pt-8 text-center">
        <div className="rounded-xl border border-blue-100 bg-linear-to-r from-blue-50 to-purple-50 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Interested in Working Together?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600">
            This project represents just one example of modern web development
            capabilities. Let's build something amazing together.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-8 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
              href="https://github.com/nikosevag/ecommerce-storefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              href="https://nikosevag.gr/#projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" />
              View More Projects
            </a>
            <a
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-3 font-medium text-gray-800 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-xl"
              href="https://nikosevag.gr/#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
