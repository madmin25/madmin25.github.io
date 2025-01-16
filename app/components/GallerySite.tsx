import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef, useCallback } from 'react';

function GallerySite() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentIndexRef = useRef(currentIndex);

useEffect(() => {
  currentIndexRef.current = currentIndex;
}, [currentIndex]);

    useEffect(() => {
                const animatedElements = document.querySelectorAll('.scaleUp')
                console.log(animatedElements);
                const animObserver = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) { 
                      if (entry.target.classList.contains('scaleUp')) {       
                          entry.target.classList.add('scaleUpDone');
                      }
                  }
                    else{
                      entry.target.classList.remove('scaleUpDone');
                    }
                });
            });
            animatedElements.forEach((ael) => animObserver.observe(ael));
          }, []);

    const expfac = 4;
    const numShow = 4;
    const numSmallShow = 2;
    const scaleFactor = 100 / (Math.pow(expfac, numShow-1) + 1);
    const scaleSmallFactor = 100 / (Math.pow(expfac, numSmallShow-1) + 1);

      const handleRightArrow = () => {
        if(currentIndex < numImages-1){
          setCurrentIndex(currentIndex + 1);
          console.log("UPDATE R: " + (currentIndex +1))
        }
      };

      const handleLeftArrow = () => {
        if(currentIndex > 0){
          setCurrentIndex(currentIndex - 1);
          console.log("UPDATE LEFT: " + (currentIndex-1))
          
        }
      };

      const handleClick = useCallback((newIndex:number) => (event) => {
        setCurrentIndex(newIndex);
        console.log("==========");
        console.log("INDEX: " + newIndex);
        console.log("currentstate: " + currentIndex)
        console.log("COMPARE: " + currentIndexRef.current);
        if(newIndex == currentIndex){
          //console.log("ALERT: " + list[newIndex].image);
          alert(list[currentIndex].image);
          
        }
        else{
          setCurrentIndex(newIndex);
        }
      }, [currentIndex]);

      const list = [
        { image: "dragon_1.jpg", 
          headline: "Headline_1",
          info: "Bla bla bla"}, 
          
        { image: "dragon_2.jpg", 
          headline: "Headline_2",
          info: "blub blub"}, 
          
        { image: "dragon_3.jpg", 
          headline: "Headline_3",
          info: "blub blub"}, 
          
        { image: "dragon_4.jpg",
          headline: "Headline_4",
          info: "blub blub"}, 
          
        { image: "dragon_5.jpg", 
          headline: "Headline_5",
          info: "blub blub blub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blubblub blub"}
        ];
      
      const numImages = list.length;
      const mappedList =list.map((currElement, index) => {
        return(
        <div key={index} onClick={handleClick(index)} className='galleryItem overflow-hidden h-full' style={{ ["--itemNum"]: index, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( index - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numShow - index), ["--widthScale"]: 100 * scaleFactor * Math.pow(expfac, numShow - (index - currentIndex)) } as any}>
          <div className='overflow-hidden relative mx-auto border-[2px] border-[--whiteish] w-full h-full bg-black'><img className='object-cover h-full w-full' draggable="false" src= {currElement.image}/>
            <div className='galleryInfo absolute bottom-0 left-0 w-full'>
              <div className='kanit-semibold text-[--blackish] leading-1'>
                <h1 className='pb-2'>{currElement.headline}</h1>
                <span className='kanit-light  text-sm'>{currElement.info}</span>
              </div>
            </div>
          </div>
        </div>
        )
      });

      const mappedImageList =list.map((currElement, indexImage) => {
        return(
        <div key={indexImage} onClick={handleClick(indexImage)} className='galleryItem overflow-hidden h-full' style={{ ["--itemNum"]: indexImage, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( indexImage - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numSmallShow - indexImage), ["--widthScale"]: 100 * scaleSmallFactor * Math.pow(expfac, numSmallShow - (indexImage - currentIndex)) } as any}>
          <div className='overflow-hidden relative mx-auto border-[2px] border-[--whiteish] w-full h-full bg-black'><img className='object-cover h-full w-full' draggable="false" src= {currElement.image}/>
          </div>
        </div>
        )
      });

      const mappedInfoList =list.map((currElement, indexInfo) => {
        return(
          <div key={indexInfo} className='smallGalleryInfo top-0 left-0 overflow-hidden' style={{ ["--itemNum"]: indexInfo, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( indexInfo - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numShow - indexInfo)} as any}>
              <div className='kanit-semibold text-[--blackish] leading-1'>
                <h1 className='pb-2'>{currElement.headline}</h1>
                <span className='kanit-light text-sm'>{currElement.info}</span>
              </div>
            </div>

        )
      });
      

      const normalGallery = [
      <div>
        <div className='mt-[15vh] md:mt-[25vh] float-left mr-3 w-6 h-6 -translate-y-full bg-white' onClick={handleLeftArrow}></div>
        <div className='mt-[15vh] md:mt-[25vh] float-right ml-3 w-6 h-6 -translate-y-full bg-white' onClick={handleRightArrow}></div>
        <div className=' flex flex-row border-0 border-green-600 h-[30vh] md:h-[50vh] overflow-hidden'>
        {mappedList}
        </div>
        </div>
      ]

      const smallGallery = [
        <div>
          <div className='mt-[15vh] md:mt-[25vh] float-left mr-3 w-6 h-6 -translate-y-full bg-white' onClick={handleLeftArrow}></div>
          <div className='mt-[15vh] md:mt-[25vh] float-right ml-3 w-6 h-6 -translate-y-full bg-white' onClick={handleRightArrow}></div>
          <div className=' flex flex-row border-0 border-green-600 h-[30vh] md:h-[50vh] overflow-hidden'>
          {mappedImageList}
          </div>
          </div>
        ]

        

  return (
    <div>
      <div className='fixed top-0 left-0 w-dvw h-dvh bg-white z-50 hidden'>TEST</div>
    <div className='hidden  lg:block relative border-0 border-purple-400  w-[80%] mx-auto text-[--whiteish]'>
      {normalGallery}
    </div>
    <div className='block  lg:hidden relative border-0 border-purple-400  w-[80%] mx-auto text-[--whiteish]'>
    {smallGallery}
    <div className='relative overflow-hidden w-auto ml-9 mr-9 mt-10 h-[20dvh]'>
      {mappedInfoList}
    </div>
    </div>
    </div>

    // <div className='relative  w-[80%] mx-auto text-[--whiteish]'>
    //     <div className='mt-[15vh] md:mt-[25vh] float-left mr-3 w-6 h-6 -translate-y-full bg-white' onClick={handleLeftArrow}></div>
    //     <div className='mt-[15vh] md:mt-[25vh] float-right ml-3 w-6 h-6 -translate-y-full bg-white' onClick={handleRightArrow}></div>
    //     <div className='scaleUp flex flex-row border-0 border-green-600 h-[30vh] md:h-[50vh] overflow-hidden'>
    //      {mappedList}
    //     </div>
    //   </div>
  )
}

export default GallerySite