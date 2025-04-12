
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 'school',
      name: 'School Management System',
      description: 'Comprehensive software for educational institutions.',
      icon: '🏫',
      fullDescription: 'Our School Management System provides end-to-end solutions for educational institutions, including student registration, attendance tracking, grade management, and parent-teacher communication.',
      features: [
        'Student information management',
        'Attendance tracking',
        'Grade-book system',
        'Timetable scheduling',
        'Fee collection',
        'Parent portal'
      ]
    },
    {
      id: 'ml-models',
      name: 'Machine Learning Models',
      description: 'Custom AI solutions for data analysis.',
      icon: '🤖',
      fullDescription: 'Our Machine Learning Models help businesses leverage AI for predictive analytics, image recognition, and natural language processing.',
      features: [
        'Custom model training',
        'Predictive analytics',
        'Image recognition',
        'Natural language processing',
        'Real-time data processing',
        'API integration'
      ]
    },
    {
      id: 'logo-design',
      name: 'Logo Design System',
      description: 'Professional branding tools.',
      icon: '🎨',
      fullDescription: 'Create stunning logos and brand identities with our professional design tools and templates.',
      features: [
        'Vector-based design',
        'Template library',
        'Color palette generator',
        'Typography tools',
        'Export in multiple formats',
        'Brand style guides'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Our Software Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-gray-300 mb-6">{product.description}</p>
              
              <Link
                to={`/product-detail`}
                state={{ product }} 
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;