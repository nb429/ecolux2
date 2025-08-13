import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, Heart, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Leaf className="h-8 w-8 text-[#2A5C94] group-hover:text-[#E9B949] transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#E9B949] rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">EcoLux</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 relative group ${
                    isActive(item.href) 
                      ? 'text-[#2A5C94]' 
                      : 'text-gray-600 hover:text-[#2A5C94]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2A5C94] transition-all duration-200 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-[#2A5C94] transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/account" className="p-2 text-gray-600 hover:text-[#2A5C94] transition-colors duration-200">
                <User className="h-5 w-5" />
              </Link>
              <button className="p-2 text-gray-600 hover:text-[#2A5C94] transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
              <Link to="/cart" className="p-2 text-gray-600 hover:text-[#2A5C94] transition-colors duration-200 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-[#E9B949] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg font-medium ${
                      isActive(item.href) ? 'text-[#2A5C94]' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 flex items-center space-x-6">
                  <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-6 w-6 text-gray-600" />
                  </Link>
                  <Link to="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingBag className="h-6 w-6 text-gray-600" />
                    <span className="absolute -top-2 -right-2 bg-[#E9B949] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
        <div className="flex items-center justify-around py-2">
          <Link to="/shop" className="flex flex-col items-center py-2 px-3">
            <Search className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">Shop</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center py-2 px-3">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">Account</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center py-2 px-3 relative">
            <ShoppingBag className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">Cart</span>
            <span className="absolute top-0 right-2 bg-[#E9B949] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Link>
          <button className="flex flex-col items-center py-2 px-3">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">Saved</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;