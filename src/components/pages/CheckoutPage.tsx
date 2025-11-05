import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useCartStore, useCartTotalPrice } from '../../store/cartStore';
import {
  CreditCard,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react';

interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const totalPrice = useCartTotalPrice();

  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId] = useState(() =>
    Math.random().toString(36).substr(2, 9).toUpperCase(),
  );

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Greece',
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const [billingAddressSame, setBillingAddressSame] = useState(true);

  // Calculate totals
  const subtotal = totalPrice;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Redirect if cart is empty
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 sm:h-24 sm:w-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl">
          Your cart is empty
        </h2>
        <p className="mb-6 text-gray-600">Add some products to checkout</p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = cleaned.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return cleaned;
    }
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  // Order Complete View
  if (orderComplete) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 sm:h-24 sm:w-24" />
        </div>
        <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          Order Confirmed!
        </h1>
        <p className="mb-2 text-lg text-gray-600">
          Thank you for your purchase
        </p>
        <p className="mb-8 text-sm text-gray-500">Order #{orderId}</p>

        <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-4 sm:p-6">
          <h3 className="mb-2 font-semibold text-green-800">What's next?</h3>
          <p className="text-sm text-green-700">
            We'll send you a confirmation email with tracking information once
            your order ships. Expected delivery is 3-5 business days.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => navigate('/orders')}
            className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300"
          >
            View Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <Link
          to="/cart"
          className="mb-4 inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Checkout
        </h1>
      </div>

      {/* Progress Steps */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center">
          <div
            className={`flex items-center ${
              currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 sm:h-8 sm:w-8 ${
                currentStep >= 1
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300'
              }`}
            >
              <span className="text-xs sm:text-sm">1</span>
            </div>
            <span className="ml-2 text-sm font-medium sm:text-base">
              Shipping
            </span>
          </div>
          <div
            className={`mx-2 h-0.5 flex-1 sm:mx-4 ${
              currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 sm:h-8 sm:w-8 ${
                currentStep >= 2
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300'
              }`}
            >
              <span className="text-xs sm:text-sm">2</span>
            </div>
            <span className="ml-2 text-sm font-medium sm:text-base">
              Payment
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Main Content */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          {/* Step 1: Shipping Information */}
          {currentStep === 1 && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-900 sm:mb-6 sm:text-xl">
                <Truck className="mr-2 h-5 w-5" />
                Shipping Information
              </h2>

              <form onSubmit={handleShippingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.firstName}
                      onChange={e =>
                        setShippingAddress({
                          ...shippingAddress,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.lastName}
                      onChange={e =>
                        setShippingAddress({
                          ...shippingAddress,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={shippingAddress.email}
                    onChange={e =>
                      setShippingAddress({
                        ...shippingAddress,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={shippingAddress.phone}
                    onChange={e =>
                      setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.address}
                    onChange={e =>
                      setShippingAddress({
                        ...shippingAddress,
                        address: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.city}
                      onChange={e =>
                        setShippingAddress({
                          ...shippingAddress,
                          city: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.zipCode}
                      onChange={e =>
                        setShippingAddress({
                          ...shippingAddress,
                          zipCode: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Country *
                  </label>
                  <select
                    required
                    value={shippingAddress.country}
                    onChange={e =>
                      setShippingAddress({
                        ...shippingAddress,
                        country: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Greece">Greece</option>
                    <option value="Cyprus">Cyprus</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Payment Information */}
          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-900 sm:mb-6 sm:text-xl">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Information
                </h2>

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={e =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardNumber: formatCardNumber(e.target.value),
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={e =>
                          setPaymentInfo({
                            ...paymentInfo,
                            expiryDate: formatExpiryDate(e.target.value),
                          })
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={4}
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={e =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvv: e.target.value.replace(/\D/g, ''),
                          })
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentInfo.nameOnCard}
                      onChange={e =>
                        setPaymentInfo({
                          ...paymentInfo,
                          nameOnCard: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="billing-same"
                      checked={billingAddressSame}
                      onChange={e => setBillingAddressSame(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="billing-same"
                      className="ml-3 text-sm leading-5 text-gray-700"
                    >
                      Billing address same as shipping address
                    </label>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="order-2 w-full rounded-lg bg-gray-200 px-4 py-3 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300 sm:order-1 sm:flex-1"
                    >
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="order-1 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:order-2 sm:flex-1"
                    >
                      {isProcessing
                        ? 'Processing...'
                        : `Complete Order - $${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              </div>

              {/* Security Notice */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 sm:p-4">
                <div className="flex items-start sm:items-center">
                  <Shield className="mt-0.5 mr-2 h-5 w-5 shrink-0 text-green-600 sm:mt-0" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Your payment is secure
                    </p>
                    <p className="mt-1 text-xs text-green-700">
                      All transactions are encrypted and processed securely
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-1 lg:order-2 lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-6">
            <h3 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
              Order Summary
            </h3>

            <div className="mb-4 space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-10 w-10 shrink-0 rounded bg-gray-50 object-contain sm:h-12 sm:w-12"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-gray-900 sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-medium text-gray-900 sm:text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between text-xs text-gray-600 sm:text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600 sm:text-sm">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-600 sm:text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-base font-semibold text-gray-900 sm:text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
