import { Calendar, Cpu, Code, Zap, TrendingUp } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      date: "April 10, 2024",
      title: "Pixel AI Studio v2.0 Released",
      description: "New neural network architectures and improved training pipelines",
      type: "release",
      icon: <Cpu className="h-5 w-5 text-blue-400" />
    },
    {
      date: "April 5, 2024",
      title: "Design System Update",
      description: "New UI components and accessibility improvements",
      type: "update",
      icon: <Code className="h-5 w-5 text-purple-400" />
    },
    {
      date: "March 28, 2024",
      title: "Performance Enhancements",
      description: "Database optimizations across all products",
      type: "improvement",
      icon: <Zap className="h-5 w-5 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Product Updates</h1>
          <p className="mt-4 text-xl text-gray-300">Latest improvements across Pixel-wave Systems</p>
        </div>

        <div className="mt-16">
          {/* Highlighted Update */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8 border border-indigo-400/50">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-400" />
              <span className="ml-3 text-lg font-semibold text-yellow-300">HIGHLIGHTS</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white">Unified Platform Dashboard</h2>
            <p className="mt-4 text-gray-300">
              We're excited to announce our new unified dashboard that provides a single pane of glass for managing all Pixel-wave products. 
              Monitor usage, performance, and integrations across your entire software stack.
            </p>
            <div className="mt-6 flex items-center">
              <Calendar className="h-5 w-5 text-gray-300" />
              <span className="ml-2 text-sm text-gray-300">Released April 15, 2024</span>
            </div>
          </div>

          {/* Updates List */}
          <div className="mt-12 space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-gray-700 hover:border-indigo-400 transition">
                <div className="flex items-center">
                  {update.icon}
                  <span className="ml-3 text-sm font-medium text-gray-300">{update.type.toUpperCase()}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-sm text-gray-400">{update.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{update.title}</h3>
                <p className="mt-2 text-gray-300">{update.description}</p>
                <button className="mt-4 text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center">
                  Read more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Products Roadmap</h2>
            <div className="bg-white/5 rounded-xl p-8 border border-gray-700">
              <div className="space-y-8">
                {[
                  {
                    quarter: "Q2 2024",
                    items: [
                      "Multi-cloud deployment options",
                      "Enhanced API rate limiting",
                      "New documentation portal"
                    ]
                  },
                  {
                    quarter: "Q3 2024",
                    items: [
                      "Mobile SDK releases",
                      "AI model marketplace",
                      "Single sign-on enhancements"
                    ]
                  }
                ].map((roadmap, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-white">{roadmap.quarter}</h3>
                    <ul className="mt-4 space-y-3">
                      {roadmap.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;