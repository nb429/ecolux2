import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, MapPin, CreditCard, Leaf, Award, TrendingUp, Calendar } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'impact', name: 'My Impact', icon: Leaf },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const recentOrders = [
    {
      id: '#ECO-1234',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$156.00',
      items: ['Organic Cotton Tee', 'Hemp Backpack'],
      treesPlanted: 2
    },
    {
      id: '#ECO-1235',
      date: '2024-01-08',
      status: 'Shipped',
      total: '$89.00',
      items: ['Bamboo Hoodie'],
      treesPlanted: 1
    },
    {
      id: '#ECO-1236',
      date: '2023-12-28',
      status: 'Delivered',
      total: '$234.00',
      items: ['Wool Coat', 'Cork Sneakers'],
      treesPlanted: 2
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Recycled Cashmere Sweater",
      price: 128,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      inStock: true
    },
    {
      id: 2,
      name: "Organic Linen Pants",
      price: 89,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      inStock: false
    }
  ];

  const impactStats = {
    treesPlanted: 47,
    co2Saved: 892, // lbs
    waterSaved: 1247, // gallons
    totalOrders: 15,
    memberSince: '2023'
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Johnson"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="sarah.johnson@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      defaultValue="123 Eco Street"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      defaultValue="San Francisco"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      defaultValue="94105"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A5C94] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#2A5C94] hover:bg-[#1e4066] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 'orders':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
              
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{order.id}</h3>
                        <p className="text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                        <span className="font-bold text-gray-900">{order.total}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">
                          {order.items.join(', ')}
                        </p>
                        <p className="text-green-600 text-sm font-medium mt-1">
                          🌱 {order.treesPlanted} tree{order.treesPlanted !== 1 ? 's' : ''} planted
                        </p>
                      </div>
                      <button className="text-[#2A5C94] hover:text-[#1e4066] font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'wishlist':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Wishlist</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-lg font-bold text-gray-900 mb-2">${item.price}</p>
                        <div className="flex items-center space-x-2">
                          {item.inStock ? (
                            <button className="bg-[#2A5C94] hover:bg-[#1e4066] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Add to Cart
                            </button>
                          ) : (
                            <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                          )}
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'impact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Environmental Impact</h2>
              <p className="text-gray-600 mb-6">EcoLux member since {impactStats.memberSince}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{impactStats.treesPlanted}</div>
                  <div className="text-gray-600">Trees Planted</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{impactStats.co2Saved}</div>
                  <div className="text-gray-600">lbs CO₂ Saved</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{impactStats.waterSaved}</div>
                  <div className="text-gray-600">Gallons Saved</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">{impactStats.totalOrders}</div>
                  <div className="text-gray-600">Total Orders</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Eco Champion Status Achieved!</h4>
                    <p className="text-gray-600 text-sm">You've planted over 25 trees - amazing work!</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainability Milestone</h4>
                    <p className="text-gray-600 text-sm">You've saved over 1,000 gallons of water!</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'settings':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Order updates</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2A5C94]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2A5C94]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Marketing emails</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2A5C94]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2A5C94]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Impact reports</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2A5C94]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2A5C94]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h3>
                  <div className="space-y-3">
                    <button className="text-[#2A5C94] hover:text-[#1e4066] font-medium">
                      Download my data
                    </button>
                    <button className="block text-red-600 hover:text-red-700 font-medium">
                      Delete my account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account and track your environmental impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#2A5C94] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Account;