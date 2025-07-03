
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Section from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';
import BaseChart from '../charts/BaseChart';
import { PRESENTATION_DATA } from '../../constants';
import { SectionProps } from '../../types';

const MarketExplosion: React.FC<SectionProps> = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const lineChartData = {
    labels: PRESENTATION_DATA.market_overview.quick_commerce.data.map(d => d.year),
    datasets: [
      {
        label: 'Market Size (USD Billion)',
        data: PRESENTATION_DATA.market_overview.quick_commerce.data.map(d => d.market_size_usd_billion),
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointRadius: 5,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }
    },
    scales: {
      x: { 
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)', callback: (value: any) => `$${value}B` },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        beginAtZero: true
      },
    },
  };

  const cityTierData = PRESENTATION_DATA.market_overview.quick_commerce.market_share_by_city_tier.data;
  const doughnutData = {
    labels: cityTierData.map(d => d.tier),
    datasets: [{
      data: cityTierData.map(d => d.share_percentage),
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
      legend: { position: 'bottom' as const, labels: { color: 'white', font: {size: 12} } },
      tooltip: { enabled: true },
    }
  };
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  return (
    <Section id="market-explosion" ref={ref}>
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full h-full items-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <motion.div className="lg:col-span-2 text-center lg:text-left" variants={variants}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-glow">The Q-Commerce Gold Rush</h1>
          <p className="text-lg text-slate-200 max-w-md mx-auto lg:mx-0">
            India's Quick Commerce is on a meteoric rise, with F&V emerging as a key battleground. This creates a colossal opportunity for growth and innovation.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <motion.div variants={variants}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <AnimatedCounter from={0.3} to={35} inView={inView} suffix="B" prefix="$" />
              </div>
              <p className="text-slate-300 mt-1">Market by 2030</p>
            </motion.div>
            <motion.div variants={variants}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                 <AnimatedCounter from={6} to={13} inView={inView} suffix=" Lakh" />
              </div>
              <p className="text-slate-300 mt-1">Jobs by 2027</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-3 h-80 md:h-96" variants={variants}>
          <BaseChart type="line" data={lineChartData} options={lineChartOptions} inView={inView} />
        </motion.div>

        <motion.div 
            className="lg:col-span-5 w-full p-4 bg-black/20 rounded-2xl mt-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4"
            variants={variants}
        >
            <h3 className="md:col-span-1 text-xl font-bold text-center">While metros dominate, a huge opportunity lies in Tier II+ cities—JioMart's strategic heartland.</h3>
            <div className="md:col-span-2 h-40 md:h-48">
                <BaseChart type="doughnut" data={doughnutData} options={doughnutOptions} inView={inView} />
            </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default MarketExplosion;