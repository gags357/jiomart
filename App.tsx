
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, Variants } from 'framer-motion';

import Introduction from './components/sections/Introduction';
import MarketExplosion from './components/sections/MarketExplosion';
import JioMartAdvantage from './components/sections/JioMartAdvantage';
import FVCrisis from './components/sections/FVCrisis';
import ConsumerInsights from './components/sections/ConsumerInsights';
import FarmnetSolution from './components/sections/FarmnetSolution';
import FarmnetFeatures from './components/sections/FarmnetFeatures';
import ImplementationPath from './components/sections/ImplementationPath';

const sections = [
  { component: Introduction, name: 'The 8% Mandate' },
  { component: MarketExplosion, name: 'The Opportunity' },
  { component: JioMartAdvantage, name: 'Our Advantage' },
  { component: FVCrisis, name: 'The Core Challenge' },
  { component: ConsumerInsights, name: 'Consumer Needs' },
  { component: FarmnetSolution, name: 'The Solution: FARMNET' },
  { component: FarmnetFeatures, name: 'How FARMNET Works' },
  { component: ImplementationPath, name: 'The Roadmap' },
];


const SlidingPanels: React.FC<{ activeSection: number }> = ({ activeSection }) => {
  const PANEL_COUNT = 5;

  const panelEnterDuration = 1;
  const panelStagger = 0.08;
  const mergeDelay = panelEnterDuration + (panelStagger * (PANEL_COUNT - 1)) - 0.5;

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: panelStagger,
      },
    },
    exit: {
      transition: {
        staggerChildren: panelStagger,
        staggerDirection: -1,
      },
    },
  };

  const panelVariants: Variants = {
    initial: { y: '100vh' },
    animate: {
      y: 0,
      transition: { duration: panelEnterDuration, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: '100vh',
      transition: { duration: panelEnterDuration, ease: [0.64, 0, 0.78, 0] },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 flex overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="w-full h-full flex"
        initial={{ gap: '2px' }}
        animate={{ gap: '0px' }}
        exit={{ gap: '2px' }}
        transition={{ duration: 0.5, delay: mergeDelay, ease: 'easeInOut' }}
      >
        {[...Array(PANEL_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            className="relative w-full h-full"
            style={{
              background: `linear-gradient(135deg, var(--section-${activeSection}-start), var(--section-${activeSection}-end))`,
            }}
            variants={panelVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const currentSectionIndex = Math.round(scrollPosition / sectionHeight);

      if (currentSectionIndex !== activeSection) {
        setActiveSection(currentSectionIndex);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <div id="app-background">
        <AnimatePresence mode="wait">
          <SlidingPanels key={activeSection} activeSection={activeSection} />
        </AnimatePresence>
      </div>
      <div
        ref={containerRef}
        className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-container"
      >
        {sections.map((Section, index) => (
          <Section.component key={index} />
        ))}
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => {
              containerRef.current?.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth',
              });
            }}
            className="relative group p-1"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-white scale-150' : 'bg-slate-400 group-hover:bg-white'
              }`}
            />
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.name}
            </span>
          </button>
        ))}
      </div>
       <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-300 animate-pulse z-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span className="text-sm font-medium">Scroll to explore</span>
      </div>
    </>
  );
};

export default App;
