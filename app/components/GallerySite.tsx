import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef, useCallback } from 'react';

function GallerySite() {
    const [currentIndex, setCurrentIndex] = useState(0);    
    const currentIndexRef = useRef(currentIndex);
    const popupElementRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  currentIndexRef.current = currentIndex;
  const popupElement = document.getElementById("popup") as HTMLDivElement;
  popupElementRef.current = popupElement;
}, [currentIndex]);

    useEffect(() => {
                const animatedElements = document.querySelectorAll('.scaleUp')
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

      const showPopup = (src:string) => {
        popupElementRef.current!.style.backgroundImage = `url(${src})`;
        popupElementRef.current!.style.display = "block";
      }

      const closePopup = () => {
        popupElementRef.current!.style.display = "none";
      }

      const handleRightArrow = () => {
        if(currentIndex < numImages-1){
          setCurrentIndex(currentIndex + 1);
        }
      };

      const handleLeftArrow = () => {
        if(currentIndex > 0){
          setCurrentIndex(currentIndex - 1);        
        }
      };

      const handleClick = useCallback((newIndex:number) => () => {
        setCurrentIndex(newIndex);
        if(newIndex == currentIndex){
          showPopup(list[currentIndex].image);
        }
        else{
          setCurrentIndex(newIndex);
        }
      }, [currentIndex]);

      const list = [
          { image: "gallery/rr_int.jpg", 
            headline: "Rolls Royce",
            info: "HQ Rendering @sndy - Maya & VRay"},

          { image: "gallery/biofresh_2.jpg", 
            headline: "Liebherr - Biofresh Feature Images",
            info: "HQ Rendering @mds - Maya & Redshift"},
        
          { image: "gallery/bmw_movie.jpg", 
            headline: "BMW - Free Project",
            info: "BMW Full CG Short Movie @sndy - Maya & VRay"},

          {image: "gallery/bauma.jpg", 
            headline: "Liebherr Earthmoving - Bauma 2022",
            info: "Mix of live-stream-overlays and prerendered clips. @mds - Maya, After Effects"},

          { image: "gallery/man.jpg", 
            headline: "MAN Logistics",
            info: "CGI Animation @sndy -Maya, VRay & Nuke"},
          
          { image: "gallery/haro.jpg", 
            headline: "Haro",
            info: "Automated Floor Replacement Renderings @mds - Houdini"},
          
            { image: "gallery/ostmost.jpg", 
              headline: "Ostmost - Liebherr",
              info: "Realtime Refrigerator Configurator @mds - Unreal Engine"},

              { image: "gallery/sujet.jpg", 
                headline: "Liebherr earthmoving",
                info: "Giant Poster @mds - Maya, Redshift & Photoshop"},

              { image: "gallery/bmw_tech.jpg", 
                headline: "BMW - Tech Image",
                info: "HQ Rendering @VINX -Maya & VRay"},

                { image: "gallery/braun_s7_shaver.jpg", 
                  headline: "Braun Product Rendering",
                  info: "HQ Rendering @VINX - Maya & VRay"},

                { image: "gallery/biofresh.jpg", 
                  headline: "Liebherr - Biofresh Feature Images",
                  info: "HQ Rendering @mds - Maya & Redshift"}, 

                { image: "gallery/bosch_ar.jpg", 
                  headline: "BOSCH - AR catalogue",
                  info: "Interactive AR product catalogue @sndy - Unity & Vuforia"},

                  { image: "gallery/brain.jpg", 
                    headline: "Colorful Mind",
                    info: "Free AI Project - ComfyUI & SDXL"},
                    
                    { image: "gallery/haro_unreal.jpg", 
                      headline: "Haro RT Showroom",
                      info: "Interactive realtime Showroom @mds - Unreal Engine"},
                    
                      { image: "gallery/visn.jpg", 
                        headline: "Osram - VISN",
                        info: "Short explainer film @mds - Maya, Redshift & After Effects"},

                      { image: "gallery/braun_s7_station.jpg", 
                        headline: "Braun Product Rendering",
                        info: "HQ Rendering @VINX - Maya & VRay"},

                        { image: "gallery/rr_clock.jpg", 
                          headline: "Rolls Royce",
                          info: "HQ Rendering @sndy - Maya & VRay"},

                          { image: "gallery/fiducia.jpg", 
                            headline: "Fiducia",
                            info: "Promo Animation @mds - Maya, Redshift & After Effects"},

                            { image: "gallery/pt.jpg", 
                              headline: "Porsche Targa",
                              info: "Photo Retouching and CGI environment @mainworks - Photoshop, 3Ds Max & VRay"},

                              { image: "gallery/haro_ai.jpg", 
                                headline: "Haro Keyvisual",
                                info: "Haro AI generated keyvisual @mds - Photoshop, ComfyUI & SDXL"},

                                { image: "gallery/braun_silkepil.jpg", 
                                  headline: "Braun Product Rendering",
                                  info: "HQ Rendering @VINX - Maya & VRay"},

                                  { image: "gallery/lhtech.jpg", 
                                    headline: "Liebherr - Technikfilme",
                                    info: "Short explainer films @mds - Houdini, Maya, Redshift & After Effects"},

                                    { image: "gallery/mini_LCI.jpg", 
                                      headline: "Mini - LCI",
                                      info: "Part replacements on photography @sndy - Maya & VRay"},

                                      { image: "gallery/OAS.jpg", 
                                        headline: "Liebherr earthmoving - OAS",
                                        info: "Short explainer films @mds - Blender & After Effects"},

                                        { image: "gallery/OralB.jpg", 
                                          headline: "OralB",
                                          info: "HQ Product Rendering @VINX - Maya & MentalRay"},

                                          { image: "gallery/osram_ani.jpg", 
                                            headline: "Osram Animation",
                                            info: "Short explainer film @mds - Maya, Redshift & After Effects"},

                                            

                                              { image: "gallery/rr_black.jpg", 
                                                headline: "Rolls Royce",
                                                info: "HQ Rendering @sndy - Maya & VRay"},

                                                

                                                  

                                                    { image: "gallery/sky_commercial.jpg", 
                                                      headline: "Sky Commercial",
                                                      info: "VFX @sndy - Houdini, VRay & Nuke"},

                                                      

                                                        

                                                          { image: "gallery/pt2.jpg", 
                                                            headline: "Porsche",
                                                            info: "Photo Retouching and CGI environment @mainworks - Photoshop, 3Ds Max & VRay"},

                                                            
          
        // { image: "gallery/print.jpg", 
        //   headline: "Liebherr eartmoving - DPL",
        //   info: "Digital Product Launcher @mds - Maya, Redshift & After Effects"}, 
          
        { image: "gallery/carlton_ai.jpg",
          headline: "AI",
          info: "AI Image modification @mds - Photoshop, ComfyUI & SDXL"}
        ];
      
      const numImages = list.length;
      const mappedList =list.map((currElement, index) => {
        return(
        <div key={index} onClick={handleClick(index)} className='galleryItem overflow-hidden h-full' style={{ ["--itemNum"]: index, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( index - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numShow - index), ["--widthScale"]: 100 * scaleFactor * Math.pow(expfac, numShow - (index - currentIndex)) } as React.CSSProperties}>
          <div className='overflow-hidden relative mx-auto border-[2px] border-[--whiteish] w-full h-full bg-black'><img className='object-cover h-full w-full' draggable="false" src= {currElement.image}/>
            <div className='galleryInfo absolute bottom-0 left-0 w-full'>
              <div className='kanit-semibold text-[--blackish]'>
                <h1 className='pb-2  font-[1.5rem]'>{currElement.headline}</h1>
                <span className='kanit-light  font-[0.7rem] leading-[0rem]'>{currElement.info}</span>
              </div>
            </div>
          </div>
        </div>
        )
      });

      const mappedImageList =list.map((currElement, indexImage) => {
        return(
        <div key={indexImage} onClick={handleClick(indexImage)} className='galleryItem overflow-hidden h-full' style={{ ["--itemNum"]: indexImage, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( indexImage - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numSmallShow - indexImage), ["--widthScale"]: 100 * scaleSmallFactor * Math.pow(expfac, numSmallShow - (indexImage - currentIndex)) } as React.CSSProperties}>
          <div className='overflow-hidden relative mx-auto border-[2px] border-[--whiteish] w-full h-full bg-black'><img className='object-cover h-full w-full' draggable="false" src= {currElement.image}/>
          </div>
        </div>
        )
      });

      const mappedInfoList =list.map((currElement, indexInfo) => {
        return(
          <div key={indexInfo} className='smallGalleryInfo top-0 left-0 overflow-hidden' style={{ ["--itemNum"]: indexInfo, ["--currentItem"]: currentIndex, ["--clampLeft"]: Math.sign( indexInfo - currentIndex +1), ["--clampRight"]: Math.sign(currentIndex + numShow - indexInfo)} as React.CSSProperties}>
              <div className='kanit-semibold text-[--blackish] leading-1'>
                <h1 className='pb-2'>{currElement.headline}</h1>
                <span className='kanit-light text-sm'>{currElement.info}</span>
              </div>
            </div>

        )
      });
      

      const normalGallery = [
      <div key="normalGallery">
        <div className='mt-[15vh] md:mt-[25vh] float-left mr-3 w-6 h-6 -translate-y-full' onClick={handleLeftArrow}><img className='rotate-180' alt="left" src="right.svg"></img></div>
        <div className='mt-[15vh] md:mt-[25vh] float-right ml-3 w-6 h-6 -translate-y-full' onClick={handleRightArrow}><img className='' alt="left" src="right.svg"></img></div>
        <div className=' flex flex-row border-0 border-green-600 h-[30vh] md:h-[50vh] overflow-hidden'>
        {mappedList}
        </div>
        </div>
      ]

      const smallGallery = [
        <div key="smallGallery">
          <div className='mt-[15vh] md:mt-[25vh] float-left mr-3 w-6 h-6 -translate-y-full' onClick={handleLeftArrow}><img className='rotate-180' alt="left" src="right.svg"></img></div>
          <div className='mt-[15vh] md:mt-[25vh] float-right ml-3 w-6 h-6 -translate-y-full ' onClick={handleRightArrow}><img className='' alt="left" src="right.svg"></img></div>
          <div className=' flex flex-row border-0 border-green-600 h-[30vh] md:h-[50vh] overflow-hidden'>
          {mappedImageList}
          </div>
          </div>
        ]

        

  return (
    <div>
      <div id='popup' onClick={closePopup} className='fixed bg-contain bg-no-repeat bg-center top-0 left-0 w-dvw h-dvh bg-[rgba(0,0,0,0.5)] z-50 hidden'></div>
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