
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { SectionProps } from '../../types';

const FarmnetSolution: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  const pillars = [
    {
      icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 21v-2.25M18.75 21v-2.25",
      title: "Store Back-End Conversion",
      description: "Turn 200+ Reliance stores into micro-fulfillment centers with cold storage and tech integration."
    },
    {
      icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875",
      title: "Society Front-End Pods",
      description: "Install smart cold lockers in 1000+ gated communities across Tier 1 cities for hyper-local access."
    },
    {
      icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      title: "WhatsApp SmartBox",
      description: "Deliver curated, personalized weekly F&V bundles directly to society lockers via WhatsApp subscriptions."
    }
  ];

  return (
    <Section id="farmnet-solution" ref={ref}>
       <motion.div 
         className="w-full h-full flex flex-col justify-center text-center"
         variants={containerVariants}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
       >
        <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-teal-300">The Solution</h2>
            <h1 className="text-4xl md:text-6xl font-black text-glow mt-1">Project FARMNET</h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mt-2">
                Our innovative response to transform JioMart’s offline presence into a digitally powered, hyperlocal, and intelligent fresh supply chain engine.
            </p>
            <p className="text-md font-semibold text-slate-100 mt-2">Powered by JioMart. Freshness, Fast-Tracked.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {pillars.map((pillar, index) => (
                <motion.div key={index} variants={itemVariants} className="p-6 bg-black/20 rounded-2xl flex flex-col">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                        </svg>
                        <h3 className="font-bold text-xl text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-slate-300 mt-2 flex-grow">{pillar.description}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default FarmnetSolution;