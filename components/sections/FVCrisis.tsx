
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';
import { PRESENTATION_DATA } from '../../constants';
import { SectionProps } from '../../types';

const FVCrisis: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      },
    }),
  };

  const flowVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section id="fv-crisis" ref={ref}>
      <div className="w-full text-center">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-glow">The ₹92,000 Crore Problem</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            India's agricultural abundance is paradoxically plagued by massive wastage. This isn't just a crisis; it's a monumental value creation opportunity for the player who builds an efficient, tech-driven supply chain.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className="p-6 bg-black/20 rounded-2xl h-full flex flex-col justify-center">
            <div className="text-5xl md:text-6xl font-bold text-white">
              <AnimatedCounter from={0} to={30} inView={inView} />-<AnimatedCounter from={0} to={40} inView={inView} suffix="%" />
            </div>
            <p className="text-slate-300 mt-2 text-lg">Annual F&V Wastage</p>
          </motion.div>
          
          <motion.div custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className="p-6 bg-black/20 rounded-2xl h-full flex flex-col justify-center order-first md:order-none">
            <svg viewBox="0 0 300 150" className="w-full h-auto">
              <motion.path
                d="M 20 75 Q 80 20, 150 75 T 280 75"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
              />
              <motion.path
                d="M 20 75 Q 80 20, 150 75 T 280 75"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="4"
                strokeLinecap="round"
                variants={flowVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
               <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <motion.g initial={{opacity:0}} animate={inView ? {opacity:1, transition:{delay:1.5}} : {opacity:0}}>
                <text x="15" y="110" fill="white" fontSize="14" fontWeight="bold">Farm</text>
                <text x="250" y="110" fill="white" fontSize="14" fontWeight="bold">Consumer</text>
              </motion.g>
            </svg>
             <div className="text-5xl md:text-6xl font-bold text-white -mt-4">
              <AnimatedCounter from={0} to={92000} inView={inView} prefix="₹" suffix=" Cr" />
            </div>
            <p className="text-slate-300 mt-2 text-lg">Annual Value Lost</p>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className="p-6 bg-black/20 rounded-2xl h-full flex flex-col justify-center">
             <div className="text-5xl md:text-6xl font-bold text-white">
              <AnimatedCounter from={100} to={60} inView={inView} suffix="%" />
            </div>
            <p className="text-slate-300 mt-2 text-lg">Cold Chain Inefficiency</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FVCrisis;
