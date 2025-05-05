import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;

 
  const defaultProducts = {
    school: {
      id: 'school',
      name: 'School Management System',
      description: 'Comprehensive software for educational institutions.',
      fullDescription: 'Our School Management System provides end-to-end solutions for schools including student registration, attendance tracking, grade management, and parent-teacher communication portals.',
      features: [
        'Student information management',
        'Attendance tracking',
        'Grade-book system',
        'Timetable scheduling',
        'Fee collection',
        'Parent portal'
      ]
    },
    'ml-models': {
      id: 'ml-models',
      name: 'Machine Learning Models',
      description: 'Custom AI solutions for data analysis.',
      fullDescription: 'Our Machine Learning Models help businesses leverage AI for predictive analytics, image recognition, and natural language processing with easy-to-integrate API solutions.',
      features: [
        'Custom model training',
        'Predictive analytics',
        'Image recognition',
        'Natural language processing',
        'Real-time data processing',
        'API integration'
      ]
    },
    'logo-design': {
      id: 'logo-design',
      name: 'Logo Design System',
      description: 'Professional branding tools.',
      fullDescription: 'Create stunning logos and brand identities with our professional design tools, templates, and brand management system.',
      features: [
        'Vector-based design tools',
        'Template library',
        'Color palette generator',
        'Typography tools',
        'Export in multiple formats',
        'Brand style guides'
      ]
    }
  };

  
  const productImages = {
    school: '/assets/students2.jpg',
    'ml-models': '/assets/machinel.jpg',
    'logo-design': '/assets/logod.jpg'
  };

  const currentProduct = product || defaultProducts[state?.productId] || defaultProducts.school;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Product Header */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src={productImages[currentProduct.id]}
              alt={currentProduct.name}
              className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">{currentProduct.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{currentProduct.fullDescription}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.asilihub.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition"
              >
                Purchase on AsiliHub.net
              </a>
              <Link
                to="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProduct.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Back */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-block border border-white text-white hover:bg-white/10 px-6 py-2 rounded-full transition"
          >
            ← Back to All products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;