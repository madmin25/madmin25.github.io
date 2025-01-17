import React from 'react'
import { useEffect } from 'react';

function TimelineSite() {
  
  useEffect(() => {
          const animatedElements = document.querySelectorAll('.timelineCircle, .timelineLine, .timelineFont, .fromLeft, fromRight')
          const animObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) { 
                if (entry.target.classList.contains('timelineCircle')) {       
                    entry.target.classList.add('timelineCircleAnimation');
                }
                if (entry.target.classList.contains('fromLeft')) {       
                  entry.target.classList.add('inLeft');
              }
              if (entry.target.classList.contains('fromRight')) {       
                entry.target.classList.add('inRight');
            }
                if (entry.target.classList.contains('timelineLine')) {       
                  entry.target.classList.add('timelineLineAnimation');
              }
                if (entry.target.classList.contains('timelineFont')) {       
                    entry.target.classList.add('timelineFontAnimation');
                }
            }
              else{
                entry.target.classList.remove('inLeft');
                entry.target.classList.remove('inRight');
                entry.target.classList.remove('timelineCircleAnimation');
                entry.target.classList.remove('timelineLineAnimation');
                entry.target.classList.remove('timelineFontAnimation');
              }
          });
      });
      animatedElements.forEach((ael) => animObserver.observe(ael));
    }, []);

  return (
    <div className='border-0 w-[80%] mx-auto md:w-full h-full border-blue-500'>
    <div className='hidden md:block mx-auto flex-col w-fit text-[--whiteish] border-0 border-red-600 md:border-green-400 lg:border-blue-400 xl:border-orange-400 md:text-l lg:text-2xl kanit-light'>
        <div className='border-0 w-fit border-purple-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 0 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 350 } as React.CSSProperties}></div>
          </div>
          <div className=' text-nowrap text-[--whiteish] pl-10 lg:pl-14 xl:pl-24 -translate-y-9 lg:-translate-y-10'>
              <div className='timelineFont w-fit border-0 border-red-600 overflow-hidden flex '>2018 - 2025 &emsp; Technical Director / 3D Artist @ mds Designagentur GmbH</div>
          </div>
        </div>

        <div className='border-0 w-fit border-purple-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 1 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 300 } as React.CSSProperties}></div>
          </div>
          <div className='inline-flex text-nowrap text-[--whiteish] pl-10 lg:pl-14 xl:pl-24 -translate-y-9 lg:-translate-y-10'>
              <div className='timelineFont border-0 border-red-600 overflow-hidden flex '>2011 - 2018 &emsp;&nbsp;&nbsp; Technical Director / 3D Artist @ VINX / Mainworks / Sunday</div>
          </div>
        </div>

        <div className='border-0 w-fit border-purple-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 2 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 250 } as React.CSSProperties}></div>
          </div>
          <div className='inline-flex text-nowrap text-[--whiteish] pl-10 lg:pl-14 xl:pl-24 -translate-y-9 lg:-translate-y-10'>
              <div className='timelineFont border-0 border-red-600 overflow-hidden flex '>2009 - 2011 &emsp;&nbsp; Multimedia Artist @ ADP Gauselmann</div>
          </div>
        </div>

        <div className='border-0  w-fit border-purple-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 3 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 200 } as React.CSSProperties}></div>
          </div>
          <div className='inline-flex text-nowrap text-[--whiteish] pl-10 lg:pl-14 xl:pl-24 -translate-y-9 lg:-translate-y-10'>
              <div className='timelineFont border-0 border-red-600 overflow-hidden flex '>2008 &emsp;&emsp;&emsp;&emsp; Diplom FH Augsburg</div>
          </div>
        </div>

        <div className='border-0  w-fit border-purple-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 4 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 150 } as React.CSSProperties}></div>
          </div>
          <div className='inline-flex text-nowrap text-[--whiteish] pl-10 lg:pl-14 xl:pl-24 -translate-y-9 lg:-translate-y-10'>
              <div className='timelineFont border-0 border-red-600 overflow-hidden flex '>2004 &emsp;&emsp;&emsp;&emsp; Abitur Maristenkolleg Mindelheim</div>
          </div>
        </div>

        
        </div>
        <div className='md:hidden kanit-light text-sm text-[--whiteish]'>
          <div className='mx-auto border-0 w-fit border-red-600'>
            <div className='fromLeft float-left w-[25%] whitespace-nowrap'>2018 - 2025</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>Technical Director / 3D Artist</div>
            <div className='fromLeft float-left w-[25%]'>&nbsp;</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>mds. Designagentur GmbH</div>
            <div className='fromLeft h-[1px] my-4 bg-[--accentColor]'></div>

            <div className='fromRight float-left w-[25%] whitespace-nowrap'>2011 - 2018</div>
            <div className='fromRight ml-24 whitespace-nowrap'>Technical Director / 3D Artist</div>
            <div className='fromRight float-left w-[25%]'>&nbsp;</div>
            <div className='fromRight ml-24 whitespace-nowrap'>VINX / Mainworks / Sunday</div>
            <div className='fromRight h-[1px] my-4 bg-[--accentColor]'></div>

            <div className='fromLeft float-left w-[25%] whitespace-nowrap'>2009 - 2011</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>Multimedia Artist</div>
            <div className='fromLeft float-left w-[25%]'>&nbsp;</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>ADP Gauselmann</div>
            <div className='fromLeft h-[1px] my-4 bg-[--accentColor]'></div>
            
            <div className='fromRight float-left w-[25%] whitespace-nowrap'>2008</div>
            <div className='fromRight ml-24 whitespace-nowrap'>Diplom Multimedia Designer</div>
            <div className='fromRight float-left w-[25%]'>&nbsp;</div>
            <div className='fromRight ml-24 whitespace-nowrap'>FH Augsburg</div>
            <div className='fromRight h-[1px] my-4 bg-[--accentColor]'></div>
            
            <div className='fromLeft float-left w-[25%] whitespace-nowrap'>2004</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>Abitur</div>
            <div className='fromLeft float-left w-[25%]'>&nbsp;</div>
            <div className='fromLeft ml-24 whitespace-nowrap'>Maristenkolleg Mindelheim</div>
            
        </div>
        </div>
    </div>
   
  )
}

export default TimelineSite