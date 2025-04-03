import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const features = [
  {
    title: "Leads",
    description: [
      "Create popups that drive engagement",
      "Build contact custom forms",
      "Design landing pages that convert",
    ],
    bg: "bg-black",
  },
  {
    title: "Search ranking",
    description: [
      "SEO hacks",
      "Add your custom domain",
      "Conduct keyword research",
    ],
    bg: "bg-gray-900",
  },
  {
    title: "Content",
    description: [
      "Generate engaging text",
      "Write unbeatable posts",
      "Create web pages with AI",
    ],
    bg: "bg-purple-700",
  },
  {
    title: "Collaboration",
    description: [
      "Add and manage team members",
      "Share draft pages",
      "Need help? Hire a pro",
    ],
    bg: "bg-black",
  },
  {
    title: "Social presence",
    description: [
      "Make a splash in socials with a Link in Bio page",
      "Embed in your favorite apps",
    ],
    bg: "bg-blue-300",
  },
  {
    title: "Sales",
    description: [
      "Create your custom storefront",
      "Manage and track your inventory",
      "Sell on Instagram, TikTok, Amazon, Facebook, eBay & more",
    ],
    bg: "bg-black",
  },
];

export default function BoostYourUI() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Boost <Rocket className="inline-block text-yellow-400" /> your...
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`p-5 rounded-2xl shadow-xl ${feature.bg}`}>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <ul className="text-sm space-y-1">
                {feature.description.map((desc, i) => (
                  <li key={i} className="list-disc ml-4">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
