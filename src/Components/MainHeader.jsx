import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    {
      name: "Explore",
      megaMenu: [
        {
          title: "Product Showcase",
          items: [{ name: "Pixel School Management", path: "/pixel-school" }],
        },
        {
          title: "User Support",
          items: [
            { name: "Guides", path: "/support" },
            { name: "FAQs", path: "/faq" },
            { name: "Customer Support", path: "/support" },
          ],
        },
      ],
    },
    {
      name: "Resources",
      megaMenu: [
        {
          title: "News & Updates",
          items: [
            { name: "New Features", path: "/updates" },
          ],
        },
        {
          title: "Community & Learning",
          items: [
            { name: "Blog", path: "/blogs" },
            { name: "Webinars", path: "/blogs" },
            { name: "Case Studies", path: "/case-studies" },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900"
      }`}
    >
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/PW-ICON.png" alt="logo" className="h-12 w-auto object-cover" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) =>
              link.megaMenu ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(link.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="text-white hover:text-blue-400 text-base transition-colors font-medium flex items-center space-x-1">
                    {link.name} <FaCaretDown className="text-sm" />
                  </button>

                  {/* Mega Menu */}
                  {openMenu === link.name && (
                    <div
                      className="absolute left-0 w-[600px] bg-gray-800 border border-gray-700 shadow-xl rounded-lg p-4 grid grid-cols-2 gap-4"
                      onMouseEnter={() => setOpenMenu(link.name)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {link.megaMenu.map((section, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-blue-400 font-semibold text-sm">{section.title}</h4>
                          <ul className="space-y-1">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <Link
                                  to={item.path}
                                  className="block px-3 py-1.5 text-gray-200 hover:text-white hover:bg-gray-700 text-base rounded-md transition-colors"
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
                  className="text-white text-base hover:text-blue-400 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-white rounded-md transition-colors font-medium"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;