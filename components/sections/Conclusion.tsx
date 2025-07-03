import React from 'react';
import SectionWrapper from '../ui/Section';

const Conclusion: React.FC = () => {
  return (
    <SectionWrapper id="conclusion">
      <div className="text-center text-white flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-7xl font-black text-glow mb-6">
          Project FARMNET: Powered by JioMart.
          <br />
          Freshness, Fast-Tracked.
        </h2>
        <img
          src="/Farmnet Image Preview.png"
          alt="Farmnet Logo"
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </SectionWrapper>
  );
};

export default Conclusion; 