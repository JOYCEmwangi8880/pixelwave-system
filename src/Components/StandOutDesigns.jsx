import { motion } from "framer-motion";
import { 
  FiGlobe, 
  FiLayout, 
  FiLink, 
  FiAlertCircle, 
  FiSliders, 
  FiMessageSquare 
} from "react-icons/fi";
import { 
  FaRegWindowMaximize, 
  FaRegWindowRestore,
  FaArrowRight
} from "react-icons/fa";

export default function StandOutDesigns() {
  return (
    <section className="bg-black/90 text-white py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">Stand out designs</h2>
        <p className="text-lg text-gray-300 mt-2">
          Our website and popup templates are designed with your business in mind. Customize anything.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-11/12 mx-auto">
        {/* Websites Section */}
        <motion.div
          className="bg-gray-900 rounded-lg p-6 relative overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl text-blue-400 font-semibold flex items-center gap-2">
              <FiGlobe className="inline" /> Websites
            </h3>
            <p className="text-gray-300 mt-2">
              Websites, landing pages, link-in-bio, we have it all. All templates are fully customizable and can be quickly expanded with pre-built sections.
            </p>
            <div className="mt-4 flex items-center">
              <a href="#" className="text-blue-400 hover:underline flex items-center">
                Learn more <FaArrowRight className="ml-1" />
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a href="#" className="text-blue-400 hover:underline flex items-center">
                Choose a template <FaArrowRight className="ml-1" />
              </a>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <motion.div
              className="absolute top-10 left-6 text-blue-400"
              whileHover={{ scale: 1.2 }}
            >
              <FiLayout size={80} />
            </motion.div>
            <motion.div
              className="absolute bottom-6 right-10 text-blue-300"
              whileHover={{ scale: 1.2 }}
            >
              <FiLink size={90} />
            </motion.div>
          </div>
        </motion.div>

        {/* Popups Section */}
        <motion.div
          className="bg-gray-900 rounded-lg p-6 relative overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl text-purple-400 font-semibold flex items-center gap-2">
              <FiAlertCircle className="inline" /> Popups
            </h3>
            <p className="text-gray-300 mt-2">
              Sales intents, modals, slide-ins, banners, and more! Boost engagement and conversions with popups that support your brand.
            </p>
            <div className="mt-4 flex items-center">
              <a href="#" className="text-purple-400 hover:underline flex items-center">
                Learn more <FaArrowRight className="ml-1" />
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a href="#" className="text-purple-400 hover:underline flex items-center">
                Choose a template <FaArrowRight className="ml-1" />
              </a>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <motion.div
              className="absolute top-12 left-8 text-purple-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaRegWindowMaximize size={70} />
            </motion.div>
            <motion.div
              className="absolute bottom-6 right-8 text-purple-300"
              whileHover={{ scale: 1.2 }}
            >
              <FiMessageSquare size={80} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}