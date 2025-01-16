import React from 'react'
import SkillIcon from './SkillIcon'
import { useEffect } from 'react';
function SkillSite() {

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
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-96 border-0 md:border-red-400 lg:border-green-400 xl:border-orange-400'>
            <div className='skillContainer col-span-2 lg:col-span-1 justify-self-center  w-72  border-0 border-orange-300'>
              <div className='upperLine accent w-full h-1 bg-[--accentColor]'/>
              <span className='textHidden kanit-medium text-[--accentColor] text-4xl'>DEVELOPMENT</span>
              <div className='lowerLine accent w-full h-1 bg-[--accentColor]'/>
              <div className='textHidden kanit-medium w-full text-[--accentColor] stickup -mt-1'>SKILLS</div>
              <div className='mt-8 grid grid-cols-3 gap-x-0 gap-y-5 justify-center'>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Python"} level={70} src={"python.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Java"} level={55} src={"java.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"C#"} level={45} src={"csharp.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"HTML"} level={70} src={"html.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"CSS"} level={80} src={"css-3.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"JavaScript"} level={70} src={"javascript.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"SQL"} level={60} src={"database.svg"}/></div>
              </div>
            </div>
    
            <div className='skillContainer snap-center lg:snap-align-none justify-self-center col-span-2 md:col-span-1 w-72 border-0 border-orange-300'>
              <div className='upperLine accent w-full h-1 bg-[--accentColor]'/>
              <span className='textHidden kanit-medium text-[--accentColor] text-4xl'>DESIGN</span>
              <div className='lowerLine accent w-full h-1 bg-[--accentColor]'/>
              <div className='textHidden kanit-medium w-full text-[--accentColor] stickup -mt-1'>SKILLS</div>
              <div className='mt-8 grid grid-cols-3 gap-x-0 gap-y-5 justify-center'>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Maya"} level={90} src={"maya.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Max"} level={90} src={"3dsmax.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Houdini"} level={80} src={"houdini.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Blender"} level={60} src={"blender.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Photoshop"} level={80} src={"photoshop.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"After FX"} level={80} src={"aftereffects.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Premiere"} level={60} src={"premiere.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Nuke"} level={70} src={"nuke.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Figma"} level={60} src={"figma.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"AdobeXD"} level={80} src={"adobexd.svg"}/></div>
              </div>
            </div>
    
            <div className='skillContainer snap-center xl:snap-align-none mb-96 xl:h-auto w-72 justify-self-center col-span-1 md:col-span-2 xl:col-span-1 border-0 border-orange-300'>
              <div className='upperLine accent w-full h-1 bg-[--accentColor]'/>
              <span className='textHidden kanit-medium text-[--accentColor] text-4xl'>RANDOM</span>
              <div className='lowerLine accent w-full h-1 bg-[--accentColor]'/>
              <div className='textHidden kanit-medium w-full text-[--accentColor] stickup -mt-1'>SKILLS</div>
              <div className='mt-8 grid grid-cols-3 gap-x-0 gap-y-5 justify-center'>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Unreal"} level={75} src={"unreal.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"Unity"} level={55} src={"unity.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"ComfyUI"} level={80} src={"comfyUI.png"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"SDXL"} level={80} src={"sdxl.svg"}/></div>
                <div className='justify-self-center'><SkillIcon iconSize={70} strokeWidth={6} title={"FLUX"} level={70} src={"flux.svg"}/></div>
              </div>
            </div>
    </div>
  )
}

export default SkillSite