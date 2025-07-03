
import React, { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';
import { AnimatedCounterProps } from '../../types';

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration = 1.5, inView, fractionDigits = 0, className, prefix = '', suffix = '' }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    const formatted = latest.toFixed(fractionDigits);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  // We can't use `motion.span` directly because we're importing framer-motion via CDN
  // We'll manage updates with a simple state and useEffect
  const [displayValue, setDisplayValue] = React.useState(rounded.get());

  useEffect(() => {
    const unsubscribe = rounded.onChange(v => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return <span className={className}>{displayValue}</span>;
};

export default AnimatedCounter;
