import { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Network error. Please try again.' 
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sky-950 via-sky-800 to-red-900">
      <div className="w-5/6 mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Contact PixelWave Systems</h1>
          <p className="mt-4 text-xl text-gray-300">We're here to help with any questions about our products!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-lg border border-gray-400 p-8 backdrop-blur-sm hover:border-white transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {submitStatus && (
              <div className={`mb-4 p-4 rounded-md ${
                submitStatus.success 
                  ? 'bg-green-900/50 text-green-100' 
                  : 'bg-red-900/50 text-red-100'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name {errors.name && <span className="text-red-400 text-xs"> - {errors.name}</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-gray-500'
                  } rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  placeholder="name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address {errors.email && <span className="text-red-400 text-xs"> - {errors.email}</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-gray-500'
                  } rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject {errors.subject && <span className="text-red-400 text-xs"> - {errors.subject}</span>}
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-500'
                  } rounded-md text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                >
                  <option value="">Select a subject</option>
                  <option value="Sales Inquiry">Sales Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership Opportunity">Partnership Opportunities</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message {errors.message && <span className="text-red-400 text-xs"> - {errors.message}</span>}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.message ? 'border-red-500' : 'border-gray-500'
                  } rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center ${
                  isSubmitting ? 'bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-lg border border-gray-400 p-8 backdrop-blur-sm hover:border-white transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <p className="text-gray-300 mt-1">info@asilihub.net</p>
                        <p className="text-gray-300">info@asilihub.net</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Phone</h3>
                        <p className="text-gray-300 mt-1">+254 726 257 338</p>
                        <p className="text-gray-300">+254 726 257 338</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Live Chat</h3>
                        <p className="text-gray-300 mt-1">Available 24/7 in your dashboard</p>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 inline-block mt-2">Start Chat →</a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Nairobi Office</h3>
                        <p className="text-gray-300 mt-1">Spur Mall , Second Floor</p>
                        <p className="text-gray-300">Along Thika Road , Ruiru</p>
                        <p className="text-gray-300">Nairobi, Kenya</p>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 inline-block mt-2">View on Map →</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Added Image on the right side */}
                <div className="md:w-1/2 flex items-center justify-center">
                  <img 
                    src="/assets/PERSON ON PHONE .png" 
                    alt="Our Team" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white/5 rounded-lg border border-gray-400 p-8 backdrop-blur-sm hover:border-white transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Support Hours (EAT)</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">8:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Emergency Support Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;