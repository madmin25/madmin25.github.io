import React, { useEffect, useState } from 'react';

const SectionTransition: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [animationKey, setAnimationKey] = useState(0); // Unique key for animation

  useEffect(() => {
    if (isAnimating) {
      setAnimationKey((prev) => prev + 1); // Change the key to trigger re-mount
    }
  }, [isAnimating]);

  return (
    <div>
      

      {/* Animated Lines */}
      <div className="pointer-events-none overflow-visible fixed z-[50] w-[145%] aspect-square border-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-amber-300 rotate-45">
        <div key={`${animationKey}-line1`} className={`origin-bottom-left absolute left-full bottom-[0%] rounded-full w-full h-[20%] bg-orange-500 animate-line1`} />
        <div key={`${animationKey}-line2`} className={`origin-bottom-left absolute left-full bottom-[20%] rounded-full w-full h-[20%] bg-blue-200 animate-line2`} />
        <div key={`${animationKey}-line3`} className={`origin-bottom-left absolute left-full bottom-[40%] rounded-full w-full h-[20%] bg-red-500 animate-line3`} />
        <div key={`${animationKey}-line4`} className={`origin-bottom-left absolute left-full bottom-[60%] rounded-full w-full h-[20%] bg-green-900 animate-line4`} />
        <div key={`${animationKey}-line5`} className={`origin-bottom-left absolute left-full bottom-[80%] rounded-full w-full h-[20%] bg-purple-700 animate-line5`} />
      </div>
    </div>
  );
};

export default SectionTransition;
