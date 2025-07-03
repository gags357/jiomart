import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className = '', id }, ref) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={`h-screen w-full snap-start flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden ${className}`}
      >
        <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center">
          {children}
        </div>
      </motion.section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;