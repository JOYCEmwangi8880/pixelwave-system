import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "UI/UX Design",
      fullDesc: "We create stunning, user-friendly interfaces that prioritize usability, engagement, and seamless experiences.",
      points: ["User-Centered Design", "Wire-framing & Prototyping", "UI Testing & Research"],
      bgImage: "/assets/logod.jpg"
    },
    {
      title: "Web Design",
      fullDesc: "We craft visually appealing and highly responsive websites optimized for performance and engagement.",
      points: ["Responsive & Adaptive Design", "SEO-Optimized Layouts", "CMS Integration"],
      bgImage: "/assets/design.jpg"
    },
    {
      title: "Mobile App Development",
      fullDesc: "We develop robust and feature-rich mobile applications tailored to user needs and business objectives.",
      points: ["iOS & Android Apps", "Cross-Platform Development", "App UI/UX Optimization"],
      bgImage: "/assets/machinel.jpg"
    },
    {
      title: "Branding & Creative Services",
      fullDesc: "We create strong brand identities with stunning visuals, logos, and marketing materials that stand out.",
      points: ["Logo & Identity Design", "Brand Strategy & Messaging", "Marketing Collateral"],
      bgImage: "/assets/study-group2.jpg"
    },
    {
      title: "Digital Marketing",
      fullDesc: "Our expert strategies in SEO, PPC, and content marketing help you grow and sustain a strong online presence.",
      points: ["SEO & SEM Optimization", "Social Media Marketing", "Content Strategy"],
      bgImage: "/assets/seo.jpg"
    },
    {
      title: "Cloud & IT Infrastructure",
      fullDesc: "We provide scalable cloud solutions and IT infrastructure services for smooth, secure business operations.",
      points: ["Cloud Computing Solutions", "Server Management", "Cybersecurity Services"],
      bgImage: "/assets/IT.jpg"
    },
  ];

  return (
    <section className="bg-sky-950 text-white py-12 px-6">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-white">Our Services</h2>
        <p className="text-center mt-4 text-gray-300 max-w-3xl text-xl mx-auto">
          We provide expert services designed to enhance your digital presence, optimize workflows,
          and drive success.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isSelected={selectedService === index}
            onSelect={() => setSelectedService(index)}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, isSelected, onSelect }) {
  return (
    <motion.div
      className={`relative h-[50vh] rounded-xl shadow-lg p-6 overflow-hidden cursor-pointer transition-all ${
        isSelected ? "absolute top-0 left-0 w-full h-full z-50" : ""
      }`}
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${service.bgImage})`,
          backgroundColor: "#000"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold">{service.title}</h3>
          <p className="text-gray-100 mt-2 text-base">{service.fullDesc}</p>
        </div>

        <ul className="mt-4 text-gray-300 text-sm space-y-1">
          {service.points.map((point, index) => (
            <li key={index} className="flex items-center">
              ✅ {point}
            </li>
          ))}
        </ul>
      </div>

      {isSelected && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSelected ? 0.7 : 0 }}
        ></motion.div>
      )}
    </motion.div>
  );
}
