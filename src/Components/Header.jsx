import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const navLinks = [
    { 
      name: "Products", 
      path: "/products",
      megaMenu: [
        {
          title: "Our Software Products",
          items: [
            { name: "Product Details", path: "/product-detail" },
            { name: "All Products", path: "/products" }
          ]
        }
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      megaMenu: [
        {
          title: "Web Development and Design",
          items: [
            { name: "Website Development", path: "/services/web-dev" },
            { name: "eCommerce Development", path: "/services/e-commerce" },
            { name: "Web Application Development", path: "/services/web-app" },
            { name: "UI/UX Design", path: "/services/ui-ux" },
            { name: "Website Maintenance", path: "/services/maintenance" },
            { name: "Landing Page Design", path: "/services/landing-pages" }
          ]
        },
        {
          title: "Mobile App Development",
          items: [
            { name: "iOS/Android Development", path: "/services/mobile-dev" },
            { name: "Progressive Web Apps", path: "/services/pwa" },
            { name: "Cross-Platform Apps", path: "/services/cross-platform" },
            { name: "Mobile UI/UX Design", path: "/services/mobile-design" },
            { name: "App Analytics", path: "/services/app-analytics" }
          ]
        },
        {
          title: "Digital Marketing",
          items: [
            { name: "Social Media Management", path: "/services/social-media" },
            { name: "SEO Services", path: "/services/seo" },
            { name: "Content Marketing", path: "/services/content" },
            { name: "Email Marketing", path: "/services/email" },
            { name: "PPC Advertising", path: "/services/ppc" }
          ]
        },
        {
          title: "IT Infrastructure",
          items: [
            { name: "Cloud Solutions", path: "/services/cloud" },
            { name: "DevOps Services", path: "/services/devops" },
            { name: "IT Support", path: "/services/it-support" },
            { name: "Cybersecurity", path: "/services/cybersecurity" },
            { name: "Network Design", path: "/services/network" }
          ]
        }
      ]
    },
    { name: "Pricing", path: "/pricing" },
    { 
      name: "Resources", 
      megaMenu: [
        {
          title: "Support & Learning",
          items: [
            { name: "Support", path: "/support" },
            { name: "FAQs", path: "/faq" },
            { name: "Blogs", path: "/blogs" }
          ]
        },
        {
          title: "Case Studies & Updates",
          items: [
            { name: "Case Studies", path: "/case-studies" },
            { name: "Updates", path: "/updates" }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <header className={`fixed z-999 top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900"
    }`}>
      <div className="w-11/12 mx-auto py-2">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo_pw.png" alt="logo" className="h-16 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.megaMenu ? (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(link.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button 
                    className="text-white hover:text-blue-400 transition-colors font-medium flex items-center space-x-1 text-lg"
                  >
                    {link.name} <FaCaretDown className="text-sm" />
                  </button>

                  {openMenu === link.name && (
                    <div className="absolute left-0 mt-2 w-[800px] bg-gray-800 border border-gray-700 shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6">
                      {link.megaMenu.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-blue-400 font-bold text-lg">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <Link
                                  to={item.path}
                                  className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white hover:text-blue-400 transition-colors font-medium text-lg"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg px-6 py-3 font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;