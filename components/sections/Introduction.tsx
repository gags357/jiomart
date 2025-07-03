
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';
import { PRESENTATION_DATA } from '../../constants';
import { SectionProps } from '../../types';

const Introduction: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const current = PRESENTATION_DATA.jioMart_specifics.current_fnv_contribution_percentage;
  const target = PRESENTATION_DATA.jioMart_specifics.target_fnv_contribution_percentage;
  const progressPercentage = (current / target) * 100;
  const targetPercentage = (target / target) * 100;


  return (
    <Section id="introduction" ref={ref}>
      <motion.div
        className="text-center flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h1 
            className="text-5xl md:text-7xl font-black text-glow"
            variants={itemVariants}
        >
          The 8% Mandate
        </motion.h1>
        <motion.p 
            className="text-xl md:text-2xl text-slate-300 mt-2 max-w-3xl"
            variants={itemVariants}
        >
          A Strategic Blueprint to Revolutionize JioMart's Fresh Produce Segment
        </motion.p>
        
        <motion.div 
            className="mt-12 w-full max-w-2xl"
            variants={itemVariants}
        >
            <h3 className="font-bold text-2xl text-white mb-4">Our Core Objective: Grow F&V Contribution</h3>
            <div className="relative w-full h-10 bg-black/30 rounded-full overflow-hidden border-2 border-slate-500">
                <motion.div 
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-end pr-4"
                    initial={{ width: `${progressPercentage}%`}}
                    animate={inView ? { width: `${targetPercentage}%`} : {}}
                    transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
                >
                   <div className="text-white font-bold text-lg drop-shadow-lg">
                    <AnimatedCounter from={current} to={target} inView={inView} suffix="%" duration={2} />
                   </div>
                </motion.div>
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold text-lg">{current}%</div>
            </div>
            <p className="text-sm text-slate-300 mt-3">This presentation outlines the path to increase F&V's sales contribution from a current 5% to a strategic 8% on JioMart Quick Commerce.</p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Introduction;