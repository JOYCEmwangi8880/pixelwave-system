import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FaGithub, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'; // From react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-11/12 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PixelWave systems</h3>
            <p className="text-gray-400">Transforming education through innovative digital solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="/updates" className="text-gray-400 hover:text-white">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/documentation" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="/webinars" className="text-gray-400 hover:text-white">Webinars</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/asilihub-limited/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/asilihub" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                <FaXTwitter size={24} />
              </a>
              <a href="https://github.com/asilihub/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={24} />
              </a>
              <a href="https://wa.me/254726257338" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-white">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} PixelWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
