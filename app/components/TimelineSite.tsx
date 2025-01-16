import React from 'react'
import { useEffect } from 'react';

function TimelineSite() {
  
  useEffect(() => {
          const animatedElements = document.querySelectorAll('.timelineCircle, .timelineLine, .timelineFont')
          const animObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) { 
                if (entry.target.classList.contains('timelineCircle')) {       
                    entry.target.classList.add('timelineCircleAnimation');
                }
                if (entry.target.classList.contains('timelineLine')) {       
                  entry.target.classList.add('timelineLineAnimation');
              }
                if (entry.target.classList.contains('timelineFont')) {       
                    entry.target.classList.add('timelineFontAnimation');
                }
            }
              else{
                entry.target.classList.remove('timelineCircleAnimation');
                entry.target.classList.remove('timelineLineAnimation');
                entry.target.classList.remove('timelineFontAnimation');
              }
          });
      });
      animatedElements.forEach((ael) => animObserver.observe(ael));
    }, []);

  return (
    <div className='border-0 border-blue-500 text-right mx-[50%]'>
    <div className=' self-center inline-flex flex-row flex-nowrap justify-end kanit-light  text-[--whiteish] border-0 border-red-600 md:border-green-400 lg:border-blue-400 xl:border-orange-400 md:text-xl lg:text-2xl kanit-light'>
        <div className='border-0 border-red-600'>
        <div className='timelineCircle' style={{ ["--offset"]: 4 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 350 } as React.CSSProperties}>
              <div className='inline-flex  text-nowrap text-[--whiteish] pl-6'>
                <div className='timelineFont w-0 overflow-hidden flex '>2018 - 2025 &emsp; Technical Director / 3D Artist @ mds Designagentur GmbH</div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-0 border-red-600'>
          <div className='timelineCircle' style={{ ["--offset"]: 3 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 300 } as React.CSSProperties}>
            <div className='inline-flex  text-nowrap text-[--whiteish] pl-6'>
                <div className='timelineFont w-0 overflow-hidden flex '>2011 - 2018 &emsp; Technical Director / 3D Artist @ VINX / Mainworks / Sunday</div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-0 border-red-600'>
        <div className='timelineCircle' style={{ ["--offset"]: 2 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 250 } as React.CSSProperties}>
            <div className='inline-flex  text-nowrap text-[--whiteish] pl-6'>
                <div className='timelineFont w-0 overflow-hidden flex '>2009 - 2011 &emsp; Artist @ ADP Gauselmann</div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-0 border-red-600'>
        <div className='timelineCircle' style={{ ["--offset"]: 1 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 200 } as React.CSSProperties}>
            <div className='inline-flex  text-nowrap text-[--whiteish] pl-6'>
                <div className='timelineFont w-0 overflow-hidden flex '>2008 Diplom FH Augsburg</div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-0 border-red-600'>
        <div className='timelineCircle' style={{ ["--offset"]: 0 } as React.CSSProperties}>
            <div className='timelineLine' style={{ ["--lineLength"]: 150 } as React.CSSProperties}>
            <div className='inline-flex  text-nowrap text-[--whiteish] pl-6'>
                <div className='timelineFont w-0 overflow-hidden flex '>2004 Abitur Maristenkolleg Mindelheim</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 300 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2011 - 2018 &emsp; Technical Director / 3D Artist @ VINX / Mainworks / Sunday</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 250 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2009 - 2011 &emsp; Artist @ ADP Gauselmann</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 200 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2008 Diplom FH Augsburg</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 150 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2004 Abitur Maristenkolleg Mindelheim</div></div></div> */}
    </div>
    </div>
    // <div className="item" style={{ ["--position"]: 2 } as any}>
  )
}

export default TimelineSite