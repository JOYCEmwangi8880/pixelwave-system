import { Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Nairobi International School Transformation",
      description: "How PixelWave Systems helped streamline operations and improve learning outcomes",
      image: "/assets/study-group.jpg",
      stats: "75% increase in administrative efficiency",
      duration: "8 month implementation",
      category: "Education"
    },
    {
      id: 2,
      title: "County-Wide School Management Rollout",
      description: "Implementing our system across 120 public schools in Western Kenya",
      image: "/assets/study-group2.jpg",
      stats: "90% adoption rate among teachers",
      duration: "1 year project",
      category: "Government"
    },
    {
      id: 3,
      title: "University Digital Transformation",
      description: "Modernizing legacy systems at Kenya's largest university",
      image: "/assets/students.jpg",
      stats: "60% reduction in manual processes",
      duration: "6 month engagement",
      category: "Higher Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-sky-700 to-purple-800">
      <div className="w-5/6 mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Case Studies</h1>
          <p className="mt-4 text-xl text-gray-300">
            Explore how PixelWave Systems is transforming education across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white/5 rounded-lg border border-gray-400 hover:border-white transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">{study.stats}</span>
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-indigo-300" />
                  <span className="text-gray-200">{study.duration}</span>
                </div>
                
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300">
                    {study.category}
                  </span>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-indigo-300 hover:text-indigo-100"
                  >
                    Read full case study
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your institution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss how PixelWave Systems can meet your specific needs.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300">
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;