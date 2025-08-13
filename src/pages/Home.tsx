import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Truck, Shield, Leaf, Star, ArrowRight, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [recentPurchases, setRecentPurchases] = useState([
    { name: 'Sarah M.', item: 'Organic Cotton Dress', time: '2 minutes ago', location: 'New York' },
    { name: 'James K.', item: 'Hemp Backpack', time: '5 minutes ago', location: 'California' },
    { name: 'Emma L.', item: 'Bamboo T-Shirt', time: '8 minutes ago', location: 'London' }
  ]);

  const testimonials = [
    {
      text: "The quality is incredible and knowing my purchase helps the planet makes it even better.",
      author: "Sarah Johnson",
      rating: 5,
      product: "Organic Cotton Dress"
    },
    {
      text: "Finally found a brand that aligns with my values without compromising on style.",
      author: "Michael Chen",
      rating: 5,
      product: "Hemp Jacket"
    },
    {
      text: "The fit is perfect and the materials feel so luxurious. Highly recommend!",
      author: "Emma Rodriguez",
      rating: 5,
      product: "Bamboo Hoodie"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Organic Cotton Oversized Tee",
      price: "$48",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      badge: "Bestseller",
      sustainability: "100% Organic",
      stock: 7
    },
    {
      id: 2,
      name: "Hemp Canvas Backpack",
      price: "$89",
      image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg",
      badge: "New",
      sustainability: "Carbon Neutral",
      stock: 12
    },
    {
      id: 3,
      name: "Bamboo Fiber Hoodie",
      price: "$76",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      badge: "Limited",
      sustainability: "Biodegradable",
      stock: 3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/761243426/rendition/720p/file.mp4?loc=external" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Sustainable
              <span className="block text-[#E9B949]">Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Fashion that doesn't cost the earth. Every purchase plants a tree and supports fair trade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/shop"
                className="bg-[#2A5C94] hover:bg-[#1e4066] px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Shop Collection</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Our Story</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social Proof Notifications */}
        <div className="absolute bottom-20 left-4 md:left-8 z-30">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {recentPurchases[0].name} from {recentPurchases[0].location}
                </p>
                <p className="text-xs text-gray-600">
                  Just purchased {recentPurchases[0].item}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center group">
              <div className="bg-[#2A5C94] p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Carbon-neutral delivery on orders over $75</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#E9B949] p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Promise</h3>
              <p className="text-gray-600">30-day returns & lifetime repair guarantee</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Planet Positive</h3>
              <p className="text-gray-600">1 tree planted per order, plastic-free packaging</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bestselling Essentials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most-loved pieces, crafted from the finest sustainable materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.badge === 'Bestseller' ? 'bg-[#E9B949] text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded">
                      {product.sustainability}
                    </span>
                  </div>
                  {product.stock < 10 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                        Only {product.stock} left
                      </span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#2A5C94] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#E9B949] text-[#E9B949]" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">(127)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="inline-flex items-center space-x-2 bg-[#2A5C94] hover:bg-[#1e4066] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Collective Impact
            </h2>
            <p className="text-xl text-gray-600">
              Together, we're making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">127,892</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Trees Planted</div>
              <div className="text-gray-600">Equivalent to 2.1M lbs CO₂ absorbed</div>
            </motion.div>

            <motion.div 
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">2.8M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Gallons Water Saved</div>
              <div className="text-gray-600">Compared to conventional production</div>
            </motion.div>

            <motion.div 
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">45,000</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Fair Wage Jobs</div>
              <div className="text-gray-600">Supporting ethical manufacturing</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-[#E9B949] text-[#E9B949]" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-gray-900 font-semibold">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-gray-500 text-sm">
              Verified purchase: {testimonials[currentTestimonial].product}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;