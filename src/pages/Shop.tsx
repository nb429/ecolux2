import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Heart, ShoppingBag } from 'lucide-react';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: "Organic Cotton Oversized Tee",
      price: 48,
      originalPrice: 65,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      category: "tops",
      badge: "Sale",
      sustainability: "100% Organic",
      stock: 7,
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Hemp Canvas Backpack",
      price: 89,
      image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg",
      category: "accessories",
      badge: "New",
      sustainability: "Carbon Neutral",
      stock: 12,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Bamboo Fiber Hoodie",
      price: 76,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      category: "tops",
      badge: "Limited",
      sustainability: "Biodegradable",
      stock: 3,
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: "Recycled Wool Coat",
      price: 165,
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
      category: "outerwear",
      sustainability: "Recycled Materials",
      stock: 8,
      rating: 4.9,
      reviews: 56
    },
    {
      id: 5,
      name: "Organic Linen Dress",
      price: 92,
      originalPrice: 120,
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
      category: "dresses",
      badge: "Sale",
      sustainability: "Fair Trade",
      stock: 15,
      rating: 4.8,
      reviews: 178
    },
    {
      id: 6,
      name: "Cork Leather Sneakers",
      price: 128,
      image: "https://images.pexels.com/photos/1456735/pexels-photo-1456735.jpeg",
      category: "footwear",
      badge: "New",
      sustainability: "Vegan",
      stock: 6,
      rating: 4.6,
      reviews: 92
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'tops', name: 'Tops', count: products.filter(p => p.category === 'tops').length },
    { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
    { id: 'outerwear', name: 'Outerwear', count: products.filter(p => p.category === 'outerwear').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
    { id: 'footwear', name: 'Footwear', count: products.filter(p => p.category === 'footwear').length }
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sustainable Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Every piece in our collection is ethically made, sustainably sourced, and designed to last.
        </p>
      </motion.div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4 overflow-x-auto pb-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === category.id
                  ? 'bg-[#2A5C94] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <motion.div 
        className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}
        layout
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className={`group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
              viewMode === 'list' ? 'flex space-x-4' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            layout
          >
            {/* Product Image */}
            <div className={`relative overflow-hidden bg-gray-100 ${
              viewMode === 'list' 
                ? 'w-48 h-48 flex-shrink-0' 
                : 'aspect-square w-full'
            }`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.badge && (
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    product.badge === 'Sale' ? 'bg-red-500 text-white' :
                    product.badge === 'New' ? 'bg-green-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded">
                  {product.sustainability}
                </span>
              </div>

              {/* Stock Alert */}
              {product.stock < 10 && (
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded">
                    Only {product.stock} left
                  </span>
                </div>
              )}

              {/* Quick Actions */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-[#2A5C94] text-white p-2 rounded-full hover:bg-[#1e4066] transition-colors">
                  <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#2A5C94] transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-[#E9B949] text-[#E9B949]' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {viewMode === 'list' && (
                  <button className="bg-[#2A5C94] hover:bg-[#1e4066] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Add to Cart
                  </button>
                )}
              </div>

              {viewMode === 'list' && (
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Sustainability:</span> {product.sustainability}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Stock:</span> {product.stock} available
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default Shop;