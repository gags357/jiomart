
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Section from '../ui/Section';
import BaseChart from '../charts/BaseChart';
import { PRESENTATION_DATA } from '../../constants';
import { SectionProps } from '../../types';

const ConsumerInsights: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  const doughnutData = {
    labels: ['Online Payment', 'Cash on Delivery'],
    datasets: [{
      data: [61.1, 38.9],
      backgroundColor: ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.4)'],
      borderColor: 'rgba(5, 150, 105, 0)',
      borderWidth: 1,
      hoverOffset: 4
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { position: 'bottom' as const, labels: { color: 'white', font: {size: 14} } },
      tooltip: { enabled: true },
    }
  };

  const radarData = {
    labels: PRESENTATION_DATA.consumer_insights.priorities.labels,
    datasets: [{
      label: 'Consumer Priority',
      data: PRESENTATION_DATA.consumer_insights.priorities.values,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      pointBackgroundColor: '#fff',
    }]
  };
  
  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
        pointLabels: { color: 'white', font: { size: 14 } },
        ticks: { display: false, stepSize: 1 },
        min: 0,
        max: 5
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  return (
    <Section id="consumer-insights" ref={ref}>
      <motion.div 
        className="w-full h-full flex flex-col justify-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <motion.div className="text-center" variants={variants}>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-glow">What the F&V Consumer Craves</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Success in F&V hinges on trust. Understanding what drives consumer decisions—prioritizing freshness and quality above all—is key to converting them to online purchasing.
          </p>
        </motion.div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch flex-grow">
          <motion.div className="p-4 bg-black/20 rounded-2xl flex flex-col" variants={variants}>
            <h3 className="text-center font-bold text-2xl mb-4 text-white">Purchase Drivers</h3>
             <div className="relative flex-grow h-64 md:h-auto">
              <BaseChart type="radar" data={radarData} options={radarOptions} inView={inView} />
            </div>
          </motion.div>
           <motion.div className="p-4 bg-black/20 rounded-2xl flex flex-col" variants={variants}>
            <h3 className="text-center font-bold text-2xl mb-4 text-white">Payment Preferences</h3>
            <div className="relative flex-grow h-64 md:h-auto">
              <BaseChart type="doughnut" data={doughnutData} options={doughnutOptions} inView={inView} />
            </div>
          </motion.div>
          <motion.div className="md:col-span-2 p-6 bg-black/20 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6" variants={variants}>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-white">The "Good Enough" Speed</h3>
              <p className="text-slate-300 mt-1 max-w-lg">The market isn't just about 10-minute speed. JioMart's model hits the sweet spot for the majority of consumers.</p>
            </div>
            <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-bold text-white">72%</div>
                <p className="text-slate-200">Want delivery<br/>in under 30 mins</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ConsumerInsights;