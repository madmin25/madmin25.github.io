import React from 'react'

type Props = {}

export default function Talent({iconSize=160, strokeWidth=20, title="", level=50, src=""}: Props) {
    const innerSize = iconSize - strokeWidth * 2 -10;
    const radius = iconSize / 2 - strokeWidth / 2 -5;
    const circleOffset = iconSize / 2 +5;
    const test = iconSize +10 + "px";
    const strokeArray = radius * 2 * Math.PI;
    const levelAdjust = strokeArray-strokeArray*level/100;
  return (
    <div className='animateOpacity group flex items-center justify-center relative bg-slate-400 shadow-cOuterShadow rounded-[15%] ' style={{width: test , height: test, minWidth: test, minHeight: test}}>
        <div className='w-[calc(100%-20px)] h-[calc(100%-20px)] flex items-center justify-center rounded-full shadow-cInnerShadow group-hover:opacity-20 '>
                
                <svg className='absolute top-0 left-0 w-full h-full'>
                    <defs>
                        <linearGradient id='TalentGradient'>
                            <stop stopColor='#e97e63' offset='0%'></stop>
                            <stop stopColor='#673ab7' offset='100%'></stop>
                        </linearGradient>
                    </defs>
                    <circle className='animateSlider fill-transparent' style={{ ["--dashOffset"]: strokeArray, ["--level"]: levelAdjust, stroke: "url(#TalentGradient)", strokeDasharray: strokeArray, strokeDashoffset: strokeArray, strokeWidth: strokeWidth, r: radius, cx: circleOffset, cy: circleOffset}}></circle>
                </svg>

                

            {/* <div className='relative aspect-square rounded-full shadow-cOuterShadow group-hover:bg-slate-600' style={{width: innerSize}}>
                <svg className='group-hover:fill-slate-700 absolute fill-[#694e97] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] h-[70%] aspect-square' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Python</title>
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
            </div> */}
            
            <div className='relative aspect-square rounded-full shadow-cOuterShadow' style={{width: innerSize}}>
                <img className='absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] h-[70%] aspect-square fill-white' alt="self-Logo" src={src}></img>
            </div>

            

            

            
        </div>
        <span className='text-center text-[0.7em] w-[100%] bg-slate-300 text-slate-900 absolute drop-shadow-lg invisible group-hover:visible z-40'>{title} <br/> {level} %</span>
        
    </div>
  )
}