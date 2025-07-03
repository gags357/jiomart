
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';
import BaseChart from '../charts/BaseChart';
import { PRESENTATION_DATA } from '../../constants';
import { SectionProps } from '../../types';

const JioMartAdvantage: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const competitorData = PRESENTATION_DATA.competitive_landscape.dark_store_network.sort((a,b) => b.store_count - a.store_count);
  const chartData = {
    labels: competitorData.map(c => c.player),
    datasets: [{
      label: 'Store Count',
      data: competitorData.map(c => c.store_count),
      backgroundColor: [
        'rgba(255, 255, 255, 0.9)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(255, 255, 255, 0.2)',
      ],
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1,
    }]
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true, backgroundColor: 'rgba(0,0,0,0.7)' },
    },
    scales: {
      x: { 
        type: 'logarithmic' as const,
        ticks: { color: 'rgba(255, 255, 255, 0.7)',
            callback: (value: any) => {
                if (value === 10000 || value === 1000 || value === 100 || value === 10) {
                    return value.toLocaleString();
                }
            }
        },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: 'rgba(255, 255, 255, 0.9)', font: { size: 14 } },
        grid: { display: false }
      },
    },
  };
  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const aovData = PRESENTATION_DATA.competitive_landscape.average_order_value.data;

  return (
    <Section id="jiomart-advantage" ref={ref}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
         <motion.div className="h-80 md:h-[450px]" variants={variants}>
          <BaseChart type="bar" data={chartData} options={chartOptions} inView={inView} />
        </motion.div>
        <motion.div className="text-center md:text-left" variants={variants}>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-glow">The JioMart Advantage</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-md mx-auto md:mx-0">
            JioMart's asset-light model, powered by an unparalleled retail footprint, provides a hidden but massive edge—perfectly suited to solve the complexities of fresh produce delivery.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <motion.div variants={variants}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <AnimatedCounter from={0} to={18000} inView={inView} />+
              </div>
              <p className="text-slate-300 mt-1">Existing Stores</p>
            </motion.div>
            <motion.div variants={variants}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                 <AnimatedCounter from={0} to={4000} inView={inView} />
              </div>
              <p className="text-slate-300 mt-1">Pin Codes Served</p>
            </motion.div>
          </div>
          <motion.div 
            className="mt-6 p-4 bg-black/20 rounded-lg text-left"
            variants={variants}>
            <h3 className="font-bold text-lg text-white mb-2">Value Proposition: Competing on Trust, Not Just Speed</h3>
            <p className="text-sm text-slate-300 mb-3">While others focus on 10-min delivery, JioMart can win on value and reliability. Higher AOV potential through trusted F&V offerings.</p>
            <div className="grid grid-cols-3 gap-2 text-center">
                {aovData.map(item => (
                    <div key={item.player}>
                        <p className="text-xs text-slate-400">{item.player}</p>
                        <p className="font-bold text-white">₹{item.aov_inr}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default JioMartAdvantage;