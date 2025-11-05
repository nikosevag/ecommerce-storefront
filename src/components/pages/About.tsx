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
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
            <Store className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-blue-600 mb-4">About ShopHub</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A modern e-commerce storefront showcasing advanced React development
          skills, complete checkout flow, and contemporary web technologies
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4">
          <div className="flex items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
            <Code className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Portfolio Project
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
            <Zap className="w-4 h-4 text-yellow-500 shrink-0" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Modern Tech Stack
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md">
            <Star className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Best Practices
            </span>
          </div>
        </div>
      </div>

      {/* Portfolio Context */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
          Portfolio Project
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Technical Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technologies and modern development
            practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Technologies */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Frontend Technologies
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>React 19</strong> - Latest features and performance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>TypeScript</strong> - Type safety and developer
                  experience
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Tailwind CSS 4</strong> - Modern utility-first styling
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Lucide React</strong> - Beautiful, consistent
                  iconography
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>React Router 7</strong> - Advanced routing with data
                  mode
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Axios</strong> - Reliable HTTP client for API
                  communication
                </span>
              </li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Development Tools
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  <strong>Vite 7</strong> - Lightning-fast build tool
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  <strong>ESLint</strong> - Code quality and consistency
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  <strong>pnpm</strong> - Efficient package management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  <strong>Rolldown</strong> - Next-generation bundler
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  <strong>Hot Module Replacement</strong> - Instant development
                  feedback
                </span>
              </li>
            </ul>
          </div>

          {/* State Management */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                State Management
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Zustand</strong> - Lightweight state management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>LocalStorage Persistence</strong> - Data retention
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Efficient Selectors</strong> - Optimized re-rendering
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Derived State</strong> - Calculated values on-demand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Action Creators</strong> - Clean state updates
                </span>
              </li>
            </ul>
          </div>

          {/* User Experience */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                User Experience
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Responsive Design</strong> - Mobile-first approach
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Multi-step Checkout</strong> - Progressive form
                  completion
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Form Validation</strong> - Real-time input validation
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Smooth Animations</strong> - Engaging interactions
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Slide-out Cart</strong> - Intuitive shopping
                  experience
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Loading States</strong> - Clear user feedback
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Key Features Demonstrated
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive showcase of modern e-commerce functionality and best
            practices
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Product Catalog & Shopping Cart
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Browse products fetched from the FakeStore API with detailed
                  product views. Complete shopping cart system with add, remove,
                  and quantity management. Cart data is saved to localStorage
                  for persistence across sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg shrink-0">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Complete Checkout Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Multi-step checkout flow with shipping and payment forms,
                  real-time validation, payment processing simulation, and
                  professional order confirmation. Features progressive steps,
                  security messaging, and optimized for Greek and Cypriot
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg shrink-0">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Slide-out Cart & Modern UI
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beautiful right-slide cart preview with full functionality.
                  Professional design with Lucide React icons, smooth
                  animations, and sticky header with always-accessible
                  navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  TypeScript & Fast Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Full type safety throughout the application with TypeScript.
                  Powered by Vite with hot module replacement for lightning-fast
                  development experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                <Palette className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Responsive Design & Performance
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          About the Developer
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
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
      <div className="text-center space-y-6 pt-8">
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This project represents just one example of modern web development
            capabilities. Let's build something amazing together.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              href="https://github.com/nikosevag/ecommerce-storefront"
              target="_blank"
              rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              href="https://nikosevag.gr/#projects"
              target="_blank"
              rel="noopener noreferrer">
              <Globe className="w-4 h-4" />
              View More Projects
            </a>
            <a
              className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-200 flex items-center justify-center gap-2"
              href="https://nikosevag.gr/#contact"
              target="_blank"
              rel="noopener noreferrer">
              <Heart className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
