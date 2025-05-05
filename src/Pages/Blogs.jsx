import { Calendar, User, Clock, Code, Cpu, Paintbrush } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: "The Future of AI in Business Applications",
      excerpt: "How machine learning models are transforming enterprise software solutions.",
      author: "Dr. Emily Zhang",
      date: "April 5, 2024",
      readTime: "6 min read",
      image: "/assets/PERSON ON PHONE .png", // Updated image path
      category: "Artificial Intelligence",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      title: "Design Systems for Scalable Products",
      excerpt: "Building consistent UI/UX across multiple software products.",
      author: "Marcus Johnson",
      date: "April 2, 2024",
      readTime: "5 min read",
      image: "/assets/lady on laptop.png", // Updated image path
      category: "Design",
      icon: <Paintbrush className="h-5 w-5" />
    },
    {
      title: "Microservices Architecture for EdTech",
      excerpt: "Why we rebuilt our school management system using microservices.",
      author: "Sarah Chen",
      date: "March 28, 2024",
      readTime: "8 min read",
      image: "/assets/students.jpg", // Updated image path
      category: "Development",
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Pixel-wave Insights</h1>
          <p className="mt-4 text-xl text-gray-600">Thought leadership on software design, development and innovation</p>
        </div>

        {/* Featured Post */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="/assets/study-group.jpg" // Updated featured image
                alt="Featured post"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm font-semibold text-indigo-600">TECHNOLOGY SPOTLIGHT</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Building the Next Generation of Software Products
              </h2>
              <p className="mt-4 text-gray-600">
                How Pixel-wave Systems is redefining enterprise software through innovative design patterns and cutting-edge technologies.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Alex Rivera, CTO</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">April 10, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {post.icon}
                    <span className="ml-2 text-sm font-medium text-gray-600">{post.category}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Webinars Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Upcoming Webinars</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "AI Integration Best Practices",
                date: "April 15, 2024 | 2:00 PM EST",
                description: "Learn how to effectively implement our machine learning models in your business",
                speaker: "Dr. Naomi Patel",
                tag: "Machine Learning"
              },
              {
                title: "Design System Workshop",
                date: "April 22, 2024 | 11:00 AM EST",
                description: "Hands-on session for implementing our design system components",
                speaker: "Carlos Mendez",
                tag: "UI/UX"
              }
            ].map((webinar, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {webinar.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900">{webinar.title}</h3>
                    <p className="mt-2 text-gray-600">{webinar.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{webinar.date}</p>
                    <p className="mt-2 text-sm font-medium text-gray-700">with {webinar.speaker}</p>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;