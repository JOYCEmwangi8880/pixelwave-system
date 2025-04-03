import { motion } from "framer-motion";

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
          <h3 className="text-3xl text-blue-400 font-semibold">Websites</h3>
          <p className="text-gray-300 mt-2">
            Websites, landing pages, link-in-bio, we have it all. All templates are fully customizable and can be quickly expanded with pre-built sections.
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline">Learn more →</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-blue-400 hover:underline">Choose a template →</a>
          </div>

          {/* Floating Images */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <motion.img
              src="/web-1.png"
              className="absolute top-10 left-6 w-40 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="/web-2.png"
              className="absolute bottom-6 right-10 w-48 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>

        {/* Popups Section */}
        <motion.div
          className="bg-gray-900 rounded-lg p-6 relative overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl text-purple-400 font-semibold">Popups</h3>
          <p className="text-gray-300 mt-2">
            Sales intents, modals, slide-ins, banners, and more! Boost engagement and conversions with popups that support your brand.
          </p>
          <div className="mt-4">
            <a href="#" className="text-purple-400 hover:underline">Learn more →</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-purple-400 hover:underline">Choose a template →</a>
          </div>

          {/* Floating Images */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <motion.img
              src="/popup-1.png"
              className="absolute top-12 left-8 w-32 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="/popup-2.png"
              className="absolute bottom-6 right-8 w-44 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
