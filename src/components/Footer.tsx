import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[#E9B949]" />
              <span className="text-xl font-bold">EcoLux</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sustainable luxury fashion that doesn't compromise on style or ethics. 
              Every purchase plants a tree and supports fair trade practices.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#E9B949] cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#E9B949] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#E9B949] cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-[#E9B949] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Sale</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 EcoLux. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🌱 127,892 trees planted</span>
              <span>♻️ 95% sustainable materials</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;