import React from 'react'
import { useEffect } from 'react';
type Props = {}

export default function SkillIcon({iconSize=160, strokeWidth=20, title="", level=50, src=""}: Props) {
    const innerSize = iconSize - strokeWidth * 2;
    const radius = iconSize / 2 - strokeWidth / 2;
    const circleOffset = iconSize / 2;
    const test = iconSize + "px";
    const strokeArray = radius * 2 * Math.PI;
    const levelAdjust = strokeArray-strokeArray*level/100;

// ----
useEffect(() => {
    const animatedElements = document.querySelectorAll('.skillHidden, .sliderOff')
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            if (entry.target.classList.contains('skillHidden')) {       
                entry.target.classList.add('skillVisible');
            }
            if (entry.target.classList.contains('sliderOff')) {       
                entry.target.classList.add('animateSlider');
            }
        }
        
        else{
          entry.target.classList.remove('skillVisible');
          entry.target.classList.remove('animateSlider');
        }
      });
    });
    animatedElements.forEach((ael) => animObserver.observe(ael));
  }, []);

//---------
  return (
    <div className='skillHidden flex flex-col justify-center items-center group ' style={{width: test}}>
    <div className='flex flex-col justify-center items-center   ' style={{width: test , height: test, minWidth: test, minHeight: test}}>
        <div className='flex w-[calc(100%)] h-[calc(100%)] items-center justify-center rounded-full'>

                <svg className='absolute top-0 left-0 z-10 -rotate-90' style={{width: test , height: test}}>
                    <defs>
                        <linearGradient id='TalentGradient'>
                            <stop stopColor='#36ffb7' offset='0%'></stop>
                            <stop stopColor='#31bd8e' offset='100%'></stop>
                        </linearGradient>
                    </defs>
                    <circle className='sliderOff fill-transparent' style={{ ["--dashOffset"]: strokeArray, ["--level"]: levelAdjust, stroke: "url(#TalentGradient)", strokeDasharray: strokeArray, strokeDashoffset: strokeArray, strokeWidth: strokeWidth, r: radius, cx: circleOffset, cy: circleOffset}}></circle>
                </svg>
            
                <svg className='absolute top-0 left-0 w-full h-full '>
                    <circle className='fill-transparent' style={{stroke: "#1d7155", strokeWidth: strokeWidth, r: radius, cx: circleOffset, cy: circleOffset}}></circle>
                </svg>

                <div className='relative rounded-full overflow-hidden' style={{width: innerSize*0.66}}>
                    <img className='desat group-hover:saturate-100' alt="skillimg" src={src}></img>
                </div>
            
        </div>
        
    </div>
    <div>
            <span className='kanit-regular text-lg text-[#e1e1e1]'>{title}</span>
    </div>
    </div>
  )
}