import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag, Truck, Shield, Leaf, Plus, Minus, Check } from 'lucide-react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Forest Green');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Organic Cotton Oversized Tee",
    price: 48,
    originalPrice: 65,
    rating: 4.8,
    reviews: 127,
    sustainability: "100% Organic",
    badge: "Sale",
    stock: 7,
    description: "Our signature oversized tee is crafted from 100% organic cotton grown without harmful pesticides. The relaxed fit and ultra-soft feel make it perfect for everyday wear, while the sustainable materials ensure you're making an eco-conscious choice.",
    images: [
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Forest Green', value: '#2d5a27' },
      { name: 'Ocean Blue', value: '#1e40af' },
      { name: 'Natural White', value: '#f8fafc' },
      { name: 'Charcoal', value: '#374151' }
    ],
    features: [
      "100% GOTS certified organic cotton",
      "Pre-shrunk and garment-washed for softness",
      "Reinforced seams for durability",
      "Carbon-neutral shipping included"
    ],
    impact: {
      waterSaved: 2700,
      co2Reduced: 5.2,
      treesPlanted: 1
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Hemp Canvas Backpack",
      price: 89,
      image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg",
      sustainability: "Carbon Neutral"
    },
    {
      id: 3,
      name: "Bamboo Fiber Hoodie",
      price: 76,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      sustainability: "Biodegradable"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {product.badge}
                </span>
              )}
              {product.stock < 10 && (
                <span className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Only {product.stock} left
                </span>
              )}
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#2A5C94]' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded">
                {product.sustainability}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-[#E9B949] text-[#E9B949]' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 px-2 py-1 text-sm font-medium rounded">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-[#2A5C94] bg-[#2A5C94] text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Color: <span className="font-normal">{selectedColor}</span>
            </h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform ${
                    selectedColor === color.name
                      ? 'border-[#2A5C94] scale-110'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-gray-600">
                {product.stock < 10 && `Only ${product.stock} left in stock`}
              </span>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-[#2A5C94] hover:bg-[#1e4066] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Features */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Product Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Environmental Impact */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span>Environmental Impact</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-bold text-blue-600">{product.impact.waterSaved}</div>
                <div className="text-sm text-gray-600">Gallons saved</div>
              </div>
              <div>
                <div className="font-bold text-green-600">{product.impact.co2Reduced}</div>
                <div className="text-sm text-gray-600">lbs CO₂ reduced</div>
              </div>
              <div>
                <div className="font-bold text-purple-600">{product.impact.treesPlanted}</div>
                <div className="text-sm text-gray-600">Tree planted</div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Free carbon-neutral shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">30-day returns</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((relatedProduct, index) => (
            <motion.div
              key={relatedProduct.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{relatedProduct.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">${relatedProduct.price}</span>
                <span className="text-sm text-green-600">{relatedProduct.sustainability}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;