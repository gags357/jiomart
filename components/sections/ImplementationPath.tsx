import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { SectionProps } from '../../types';
import AnimatedCounter from '../ui/AnimatedCounter';
import BaseChart from '../charts/BaseChart';
import { PRESENTATION_DATA } from '../../constants';

const ImplementationPath: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const phases = [
    { name: "Phase 1: Pilot", duration: "0-3 Months", tasks: ["200 Store Conversions", "100 Society Pods", "WhatsApp SmartBox Launch"], icon: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" },
    { name: "Phase 2: Scale", duration: "4-8 Months", tasks: ["500 Pin Code Expansion", "Gamified App Ordering", "Full QR Traceability"], icon: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
    { name: "Phase 3: Optimize", duration: "9-12 Months", tasks: ["AI Demand Forecasting", "Personalized SmartBoxes", "Full Automation"], icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" }
  ];
  
  const roiData = {
    labels: ['Investment', 'Projected Revenue'],
    datasets: [{
      data: [PRESENTATION_DATA.farmnet_solution.investment, PRESENTATION_DATA.farmnet_solution.projected_revenue],
      backgroundColor: ['rgba(239, 68, 68, 0.7)', 'rgba(34, 197, 94, 0.7)'],
      borderColor: ['rgba(239, 68, 68, 1)', 'rgba(34, 197, 94, 1)'],
      borderWidth: 2,
    }]
  };
  const roiOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: 'white', callback: (value:any) => `₹${value} Cr` },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      x: { ticks: { color: 'white', font: {size: 14} } }
    },
  };

  return (
    <Section id="implementation-path" ref={ref}>
      <motion.div 
        className="w-full h-full flex flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-glow">Blueprint for Dominance</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Our phased roadmap ensures a focused, milestone-driven execution, transforming JioMart into the market leader for fresh produce.
          </p>
        </motion.div>

        <div className="mt-12 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Column 1: Timeline */}
            <motion.div 
                className="space-y-6 w-full"
                variants={containerVariants}
            >
                {phases.map((phase, index) => (
                    <motion.div key={phase.name} className="flex items-start gap-4" variants={itemVariants}>
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="bg-white/20 rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d={phase.icon} /></svg>
                            </div>
                            {index < phases.length -1 && <div className="w-px h-16 bg-white/30 mt-2"></div>}
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white">{phase.name} <span className="text-base font-normal text-slate-300">({phase.duration})</span></h3>
                            <ul className="mt-1 text-slate-300 list-disc list-inside">
                                {phase.tasks.map(task => <li key={task}>{task}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Column 2: Metrics Dashboard */}
            <motion.div className="w-full space-y-8" variants={containerVariants}>
                 <motion.div className="p-6 bg-black/20 rounded-2xl" variants={itemVariants}>
                    <h3 className="font-bold text-2xl text-white mb-4 text-center">Key Success Metrics</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <p className="text-3xl font-bold text-white"><AnimatedCounter from={0} to={8} inView={inView} suffix="%" /></p>
                            <span className="text-sm text-slate-300">Target F&V Contribution</span>
                        </div>
                         <div>
                            <p className="text-3xl font-bold text-white"><AnimatedCounter from={0} to={20} inView={inView} suffix="%" /></p>
                            <span className="text-sm text-slate-300">Waste Reduction</span>
                        </div>
                    </div>
                 </motion.div>
                 <motion.div className="p-6 bg-black/20 rounded-2xl" variants={itemVariants}>
                    <h3 className="font-bold text-2xl text-white mb-4 text-center">Return on Investment</h3>
                    <div className="h-48">
                        <BaseChart type="bar" data={roiData} options={roiOptions} inView={inView} />
                    </div>
                 </motion.div>
            </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ImplementationPath;