
import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "month",
      description: "For small institutions and startups",
      features: [
        "Up to 100 students",
        "Basic reporting",
        "Email support",
        "Core features only"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "For growing businesses",
      features: [
        "Up to 500 students",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited students",
        "Dedicated account manager",
        "24/7 support",
        "White-label solution",
        "Custom development"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Pricing Plans</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Choose the perfect plan for your institution. All plans include our core features with options to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 ${
                plan.popular ? "border-red-500" : "border-white/10"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-300 ml-2">/{plan.period}</span>
                )}
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;