import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Lock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Cotton Oversized Tee",
      price: 48,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      size: "M",
      color: "Forest Green",
      quantity: 2,
      sustainability: "100% Organic"
    },
    {
      id: 2,
      name: "Hemp Canvas Backpack",
      price: 89,
      image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg",
      size: "One Size",
      color: "Natural",
      quantity: 1,
      sustainability: "Carbon Neutral"
    },
    {
      id: 3,
      name: "Bamboo Fiber Hoodie",
      price: 76,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      size: "L",
      color: "Sage",
      quantity: 1,
      sustainability: "Biodegradable"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const treesPlanted = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center pb-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link 
            to="/shop"
            className="inline-flex items-center space-x-2 bg-[#2A5C94] hover:bg-[#1e4066] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            <span>Shop Collection</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
          </div>
          <Link 
            to="/shop"
            className="flex items-center space-x-2 text-[#2A5C94] hover:text-[#1e4066] font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-48 md:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                        <div className="text-sm text-gray-600 space-y-1 mt-1">
                          <p>Size: {item.size} • Color: {item.color}</p>
                          <p className="text-green-600 font-medium">{item.sustainability}</p>
                        </div>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-xl font-bold text-gray-900">${item.price}</p>
                        <p className="text-sm text-gray-500">per item</p>
                      </div>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 sticky top-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">Environmental Impact</span>
                </div>
                <p className="text-sm text-green-700">
                  Your order will plant {treesPlanted} tree{treesPlanted !== 1 ? 's' : ''} 
                  and save approximately 450 gallons of water!
                </p>
              </div>

              {/* Free Shipping Notice */}
              {subtotal < 75 && (
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-1">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-800">Almost there!</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Add ${(75 - subtotal).toFixed(2)} more for free carbon-neutral shipping
                  </p>
                </div>
              )}

              <button className="w-full bg-[#2A5C94] hover:bg-[#1e4066] text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 mb-4 flex items-center justify-center space-x-2">
                <Lock className="h-5 w-5" />
                <span>Secure Checkout</span>
              </button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500 flex items-center justify-center space-x-1">
                  <Lock className="h-4 w-4" />
                  <span>Secure 256-bit SSL encryption</span>
                </p>
                <p className="text-sm text-gray-500">30-day return policy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;