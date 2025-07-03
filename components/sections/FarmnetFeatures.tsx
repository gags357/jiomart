
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { SectionProps } from '../../types';

const FarmnetFeatures: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const features = [
    {
      icon: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z",
      title: "QR-Based Traceability",
      description: "Customers scan QR codes to see produce origin, harvest time, and transit data, building unparalleled trust."
    },
    {
      icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 9l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 2.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 9l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
      title: "AI-Powered Personalization",
      description: "Weekly bundles are curated based on user preferences, with dynamic pricing and demand-based sourcing per pin code."
    },
    {
      icon: "M13.5 10.5V6.75a4.5 4.5 0 0 0-4.5-4.5a4.5 4.5 0 0 0-4.5 4.5v3.75m17.25 0v-3.75a4.5 4.5 0 0 0-4.5-4.5a4.5 4.5 0 0 0-4.5 4.5v3.75",
      title: "Hyperlocal Fulfillment Pods",
      description: "Refrigerated pods in housing societies ensure delivery in under 30 minutes and support flexible pick-up times."
    },
    {
      icon: "M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
      title: "Interconnected Hubs",
      description: "Nearby hubs can auto-balance inventory, sending surplus from one store to another with a stockout."
    },
    {
        icon: "M16.5 18.75h-9a9 9 0 1 0 0-12h9a9 9 0 1 0 0 12Zm-9-3.75h.008v.008h-.008v-.008ZM12 15h.008v.008H12V15Zm3.75 0h.008v.008h-.008v-.008Z",
        title: "WhatsApp Loyalty Engine",
        description: "Gamified engagement through order reminders, streak rewards, and special offers to drive repeat purchases."
    },
    {
      icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
      title: "The Competitive Edge",
      description: "While others chase speed, FARMNET leverages existing assets to solve the core F&V problems: freshness, trust, and scalability.",
    }
  ];

  return (
    <Section id="farmnet-features" ref={ref}>
      <div className="w-full text-center">
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-glow">How FARMNET Delivers Value</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mt-2">
            Beyond logistics, FARMNET is a consumer behavior revolution built on a foundation of cutting-edge features.
          </p>
        </motion.div>
        
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title} 
              variants={itemVariants} 
              className="p-6 bg-black/20 rounded-2xl flex flex-col"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
              </svg>
              <h3 className="font-bold text-xl text-white">{feature.title}</h3>
              <p className="mt-2 flex-grow text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default FarmnetFeatures;