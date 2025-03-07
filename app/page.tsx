"use client";
import {  useEffect } from 'react';
import SkillSite from './components/SkillSite';
import TimelineSite from './components/TimelineSite';
import LandingSite from './components/LandingSite';
import Navbar from './components/Navbar';
import GallerySite from './components/GallerySite';

export default function Home() {

  

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.upperLine, .lowerLine, .textHidden')
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
          if (entry.target.classList.contains('upperLine')) {       
              entry.target.classList.add('upperLineDone');
          }
          if (entry.target.classList.contains('textHidden')) {       
            entry.target.classList.add('textVisible');
        }
          if (entry.target.classList.contains('lowerLine')) {       
              entry.target.classList.add('lowerLineDone');
          }
      }
        else{
          entry.target.classList.remove('upperLineDone');
          entry.target.classList.remove('lowerLineDone');
          entry.target.classList.remove('textVisible');
        }
      });
    });
    animatedElements.forEach((ael) => animObserver.observe(ael));
  
  }, []);



  return (
    // banner
    <div className="kanit-light backdrop w-full h-dvh overflow-hidden">
      
      <div className='w-full md:w-[80%] mx-auto border-0 border-red-400'>
      <Navbar></Navbar>
      <div className='scrollcontainer flex flex-none flex-col flex-nowrap overflow-auto overflow-x-hidden mssY w-full h-dvh'>
        <div id="Home" className='collapse snap-start kanit-semibold text-5xl tracking-widest mx-auto text-[--accentColor]'>ABOUT</div>
        <div className='flex-none  w-full min-h-dvh mt-2 md:mt-10 lg:mt-4 xl:mt-8'>
          <LandingSite></LandingSite>
        </div>
        <div id="Portfolio" className='snap-start kanit-semibold text-5xl tracking-widest mx-auto text-[--accentColor] pt-24 md:pt-28 pb-20'>PORTFOLIO</div>
        <div className='flex-none  w-full min-h-dvh'>
          <GallerySite></GallerySite>
        </div>
        <div id="Skills" className='snap-start kanit-semibold text-5xl tracking-widest mx-auto text-[--accentColor] pt-24 md:pt-28 pb-20'>SKILLS</div>
        <div className='flex-none w-full min-h-dvh'>      
          <SkillSite></SkillSite>
        </div>
        <div id="Timeline" className='snap-start kanit-semibold text-5xl tracking-widest mx-auto text-[--accentColor] pt-24 md:pt-28 pb-20'>TIMELINE</div>
        <div className='flex-none w-full min-h-dvh'>
          <TimelineSite></TimelineSite>
        </div>
        {/* <div id="Contact" className='snap-start kanit-semibold text-5xl tracking-widest mx-auto text-[--accentColor] pt-24 md:pt-28 pb-20'>CONTACT</div>
        <div className='flex-none w-full min-h-dvh'>
          contact
        </div> */}
      </div>
      </div>
    </div>
    
  );
}
