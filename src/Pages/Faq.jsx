import React, { useState } from 'react';
import { Plus, Mail } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with Pixel-wave products?",
      answer: "You can start by visiting our Products page to explore our offerings, then contact our sales team for a demo or consultation. We'll guide you through the onboarding process based on your specific needs."
    },
    {
      question: "What kind of support is included with my subscription?",
      answer: "All subscriptions include basic email support during business hours. Higher tiers include priority phone support, dedicated account management, and 24/7 emergency support for critical issues."
    },
    {
      question: "Can I integrate Pixel-wave products with my existing systems?",
      answer: "Yes, all our products are designed with API-first architectures. We provide comprehensive documentation and SDKs for popular platforms to facilitate integration with your existing tech stack."
    },
    {
      question: "How often are new features released?",
      answer: "We release minor updates every 2 weeks and major feature updates quarterly. All updates are backward compatible and come with detailed release notes and migration guides when needed."
    },
    {
      question: "What security measures are in place for your products?",
      answer: "We implement industry-standard security practices including end-to-end encryption, regular penetration testing, SOC 2 compliance, and optional on-premises deployment for sensitive data."
    },
    {
      question: "Do you offer training for your products?",
      answer: "Yes, we provide various training options including online courses, documentation, live webinars, and customized on-site training sessions for enterprise customers."
    }
  ];

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
   
    alert(`Thank you for your question: "${newQuestion}". Our team will respond shortly.`);
    setNewQuestion('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about Pixel-wave Systems products</p>
        </div>

        <div className="space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/5 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <Plus className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                  activeIndex === index ? 'transform rotate-45' : ''
                }`} />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 pt-2 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-indigo-900/20 rounded-xl p-8 border border-indigo-400/50">
          <div className="text-center">
            <Mail className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Still have questions?</h2>
            <p className="text-gray-300 mb-6">Can't find what you're looking for? Ask our team directly!.</p>
            
            <form onSubmit={handleSubmitQuestion} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-white/10 border border-gray-600 text-white placeholder-gray-400 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg transition"
                >
                  Ask
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;