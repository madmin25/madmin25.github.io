import React from 'react';
import { useEffect } from 'react';

function LandingSite() {

    useEffect(() => {
            const animatedElements = document.querySelectorAll('.fromLeft, .fromRight')
            const animObserver = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) { 
                  if (entry.target.classList.contains('fromLeft')) {       
                      entry.target.classList.add('inLeft');
                  }
                  if (entry.target.classList.contains('fromRight')) {       
                    entry.target.classList.add('inRight');
                }
              }
                else{
                  entry.target.classList.remove('inLeft');
                  entry.target.classList.remove('inRight');
                }
            });
        });
        animatedElements.forEach((ael) => animObserver.observe(ael));
      }, []);


  return (
    <div>
    <div className='hidden md:block relative border-0 border-green-300 mx-auto h-dvh'>
        <div className='fromLeft float-left border-02 border-green-300 h-[90%] flex w-[50%]'>
            <div className='border-0 border-red-40'>
                <div className='kanit-semibold text-[--whiteish] md:text-[2.25rem] lg:text-[3.2rem] tracking-wide mb-5 text-nowrap mt-20 lg:mt-32 xl:mt-72'> <div className='flex typewriter'>Martin Adelwarth</div></div>
                <div className='kanit-extraLight text-[--whiteish] md:text-base lg:text-xl'> I am a seasoned multimedia artist and skilled developer, driven by a passion for innovation and continuous growth. With a proven track record of creating impactful visual and digital experiences, I thrive on exploring emerging technologies, including AI, to expand my creative and technical horizons. Let’s build the future together. </div>
                <div className='w-fit kanit-semibold text-3xl bg-[--accentColor] p-4 text-[--blackish] md:mt-16 lg:mt-20 xl:mt-28'> CONTACT ME </div>
            </div>
        </div>
        <div className='fromRight float-right relative border-0 border-blue-500 w-1/2 max-w-[580px] aspect-[0.65] overflow-hidden'>
            <div className='absolute top-[70%] bg-slate-400 w-0 h-0 border-0 border-red-200'>
                <div className='absolute z-10 md:scale-[0.7] lg:scale-[0.9] xl:scale-100'>
                    <div className='absolute kanit-regular text-[--accentColor] text-6xl'>designer</div>
                    <div className='absolute kanit-regular text-[--accentColor] text-6xl top-10 left-[11.78rem]'>developer</div>
                </div>
            </div>
            
            <img className="w-full object-fill border-0 border-red-300" src="mad.png" alt=""/>
            
        </div>
    </div>

    <div className='block md:hidden relative border-0 border-orange-400 w-[100%]'>
        <div className='fromRight bg-[#b3cecf] w-[80%] aspect-[1.3] h-[90%] rounded-l-full overflow-hidden translate-x-[25%]'>
            <div className='h-[100%] w-[75%] translate-x-1/2'>
            <img className="float-right -mt-7 mr-5 w-full border-0 border-red-400 object-scale-down" src="mad.png" alt=""/>
            </div>
        </div>

        <div className='fromRight float-right border-0 w-[60%] border-green-400 mt-3'>
            
                <div className='absolute z-10 scale-[0.4]'>
                    <div className='absolute kanit-regular text-[--accentColor] text-6xl'>designer</div>
                    <div className='absolute kanit-regular text-[--accentColor] text-6xl top-10 left-[11.78rem]'>developer</div>
                </div>
            
        </div>
        
        <div className='fromLeft border-0 border-green-300 h-[90%] ml-8 pr-10'>
            <div className='border-0 border-red-40'>
                <div className='kanit-regular text-[--whiteish] text-[3.2rem] leading-[3.2rem] mb-5 text-nowrap mt-20 lg:mt-32 xl:mt-72'> Martin <br/> Adelwarth</div>
                <div className='kanit-thin text-[--whiteish] text-[1rem] leading-5 '>I am a seasoned multimedia artist and skilled developer, driven by a passion for innovation and continuous growth. With a proven track record of creating impactful visual and digital experiences, I thrive on exploring emerging technologies, including AI, to expand my creative and technical horizons. Let’s build the future together.</div>
                <div className='w-fit kanit-semibold text-2xl bg-[--accentColor] p-3 text-[--blackish] ml-auto mt-8'> CONTACT ME </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default LandingSite