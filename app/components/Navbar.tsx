import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

return(
    <div className='z-50 border-0 mx-auto fixed mt-6 border-green-300 kanit-regular text-xl text-[--whiteish] w-[80%]'  style={{width: "inherit"}}> 
  <button onClick={handleClick} className="md:hidden flex flex-col border-0 border-red-400  float-left ml-6">
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} > 
    </span>
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} > 
    </span>
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} > 
    </span> 
    
  </button>
  <div className={`ml-2 rounded-br-3xl border-l-2 md:border-0 border-[--accentalpha] md:ml-0 -mt-3 bg-[--blackalpha] md:bg-transparent p-6 pt-0 pl-2 float-left ${isOpen ? 'visible' : 'collapse'} md:visible`}>
    <ul className="border-0 border-red-400 mt-[0.1rem] flex flex-col md:flex-row list-none gap-y-1 gap-x-4">
        <li className=' hover:underline underline-offset-4'><a onClick={handleClick} href="#Home">Home</a></li>
        <li className=' hover:underline underline-offset-4'><a onClick={handleClick} href="#Portfolio">Portfolio</a></li>
        <li className=' hover:underline underline-offset-4'><a onClick={handleClick} href="#Skills">Skills</a></li>
        <li className=' hover:underline underline-offset-4'><a onClick={handleClick} href="#Timeline">Timeline</a></li>
        {/* <li className=' hover:underline underline-offset-4'><a onClick={handleClick} href="#Contact">Contact</a></li> */}
    </ul>
    </div>

    <div className='float-right flex gap-x-2 h-5 -mt-2 mr-6 md:mr-0 '>
    <a href="https://www.linkedin.com/in/martin-adelwarth-3300a714a/" target="_blank"><img className="h-full object-contain invert hover:scale-[110%]" src="linkedin.svg"></img></a>
    <a href="http://www.xing.com/profile/Martin_Adelwarth" target="_blank"><img className="h-full object-contain invert hover:scale-[110%]" src="xing.svg"></img></a>
             {/* <img className="h-full object-contain invert hover:scale-[110%]" src="youtube.svg"></img>
             <img className="h-full object-contain invert hover:scale-[110%]" src="github.svg"></img> */}
         </div>
  </div>
  
)
};