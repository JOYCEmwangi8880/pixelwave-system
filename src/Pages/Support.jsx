import { Mail, Phone, MessageSquare, Code, Cpu, BookOpen, Database } from 'lucide-react';

const Support = () => {
  const productDocs = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Documentation",
      description: "Complete reference for integrating with our platforms",
      link: "/support/api-docs"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Model Guides",
      description: "Implementing our machine learning solutions",
      link: "/support/ai-guides"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Migration",
      description: "Moving from legacy systems to Pixel-wave",
      link: "/support/migration"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Design System",
      description: "UI components and brand guidelines",
      link: "/support/design-system"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Pixel-wave Support</h1>
          <p className="mt-4 text-xl text-gray-300">Resources for all our software products</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Mail className="h-8 w-8" />,
              title: "Email Support",
              contact: "support@pixelwave.io",
              action: "Mail Us"
            },
            {
              icon: <Phone className="h-8 w-8" />,
              title: "Phone Support",
              contact: "+1 (800) 555-TECH",
              action: "Call Now"
            },
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Live Chat",
              contact: "Available 24/7",
              action: "Start Chat"
            },
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: "Knowledge Base",
              contact: "500+ Articles",
              action: "Browse Docs"
            }
          ].map((channel, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 border border-gray-700 hover:border-indigo-400 transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500/20 mx-auto">
                {channel.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium text-white text-center">{channel.title}</h3>
              <p className="mt-2 text-gray-300 text-center">{channel.contact}</p>
              <button className="mt-4 w-full py-2 text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition">
                {channel.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Product Documentation</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productDocs.map((doc, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-gray-700 hover:border-indigo-400 transition">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20">
                  {doc.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{doc.title}</h3>
                <p className="mt-2 text-gray-300">{doc.description}</p>
                <a href={doc.link} className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300">
                  View Documentation
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Support;