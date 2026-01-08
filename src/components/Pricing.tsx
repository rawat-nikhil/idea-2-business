"use client";

import { motion, Variants } from "framer-motion";
import { Check, Zap, Briefcase, ShoppingCart } from "lucide-react";

const WHATSAPP_NUMBER = "919870114941";

const pricingData = [
  {
    title: "Static Portfolio",
    price: "₹12,000",
    description:
      "A sleek, professional presence for individuals, freelancers, and personal brands.",
    features: [
      "Custom Single Page Design",
      "About & Bio Section",
      "Service/Portfolio Gallery",
      "Mobile-First Responsive Layout",
      "Contact Form Integration",
      "Social Media Connectivity",
      "Basic SEO Setup",
    ],
    icon: <Zap className="w-6 h-6" />,
    color: "accent",
    whatsappMessage:
      "Hey! 👋 I am interested in the Static Portfolio package (₹12,000). Let's get started! 🚀🎨",
  },
  {
    title: "Business Website",
    price: "₹20,000",
    description:
      "Comprehensive digital solution for small to medium businesses to scale online.",
    features: [
      "Advanced Multi-page Website",
      "Detailed Service Listings",
      "Business Details & Team Section",
      "Basic Inventory/Product Catalog",
      "Custom Testimonials Section",
      "Blog/News Management",
      "Enhanced SEO Optimization",
      "Performance Optimization",
      "Priority Email Support",
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: "accent-secondary",
    whatsappMessage:
      "Hello! 🏢 I am interested in the Business Website (₹20,000). Let's scale my business! ✨📈",
  },
  {
    title: "E-commerce & Systems",
    price: "₹35,000",
    description:
      "A powerhouse platform with full automation, inventory control, and analytics.",
    features: [
      "Complete E-commerce Engine",
      "Automated Order Management",
      "Dynamic Inventory Handling",
      "Payment Gateway Integration",
      "Secure Admin Control Panel",
      "Real-time Analytical Dashboard",
      "Customer Account System",
      "Advanced Search & Filters",
      "Push Notifications Setup",
      "API & 3rd Party Integrations",
      "Maximum Speed Optimization",
      "24/7 Premium Support",
    ],
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "white",
    whatsappMessage:
      "Greetings! 🤝 I am interested in the E-commerce and Systems package (₹35,000). Let's build! 🛒💸",
  },
];

const Pricing = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      id="pricing"
      className="py-32 px-6 relative overflow-hidden bg-[#030014]"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden text-center opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse will-change-opacity" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse will-change-opacity" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 font-[Inter]">
        <div className="flex flex-col items-center text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 fill-accent shrink-0" />
            Transparent Pricing
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[54px] font-black text-white leading-[1.1] tracking-tighter mb-8"
          >
            Elevate Your Business <br />
            <span className="bg-gradient-to-r from-yellow-200 via-accent to-purple-400 bg-clip-text text-transparent animate-gradient-x px-4">
              With Digital Power
            </span>
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-morphism relative p-8 rounded-[40px] border border-white/10 bg-[#0c0c0c]/40 flex flex-col h-full group transition-colors duration-500"
            >
              <div
                className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 relative transition-transform duration-500 will-change-transform ${
                  item.color === "accent"
                    ? "bg-accent/20 text-accent"
                    : item.color === "accent-secondary"
                    ? "bg-accent-secondary/20 text-accent-secondary"
                    : "bg-white/20 text-white"
                }`}
              >
                {item.icon}
              </div>

              <h4 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors duration-500">
                {item.title}
              </h4>
              <p className="text-muted text-sm mb-6 leading-relaxed opacity-60 font-medium group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>

              <div className="mb-8 relative">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-10 flex-grow">
                {item.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-start gap-3 group/feature cursor-default"
                  >
                    <div
                      className={`p-1 rounded-lg mt-0.5 transition-all duration-300 group-hover/feature:scale-110 ${
                        item.color === "accent"
                          ? "bg-accent/20 text-accent"
                          : item.color === "accent-secondary"
                          ? "bg-accent-secondary/20 text-accent-secondary"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted/80 text-[13px] font-bold group-hover/feature:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  item.whatsappMessage || ""
                ).replace(/%20/g, "+")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-[20px] font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-500 text-center overflow-hidden group/btn bg-white/10 text-white hover:bg-white/20 border border-white/20 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GET STARTED
                  <Zap className="w-3.5 h-3.5 fill-accent text-accent" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
