import React from 'react'

function LinkHeader() {
  return (
    // <div className='collapse md:visible z-50 fixed kanit-regular text-xl text-[--whiteish] top-6 w-[80%]'  style={{width: "inherit"}}>
    //     <div className='float-left'>
    //     <ul>
    //     <li className='inline-block mx-3 lg:mx-5'><a href="#Home">Home</a></li>
    //     <li className='inline-block mx-3 lg:mx-5'><a href="#Portfolio">Portfolio</a></li>
    //     <li className='inline-block mx-3 lg:mx-5'><a href="#Skills">Skills</a></li>
    //     <li className='inline-block mx-3 lg:mx-5'><a href="#Timeline">Timeline</a></li>
    //     <li className='inline-block mx-3 lg:mx-5'><a href="#Contact">Contact</a></li>
    //     </ul>
    //     </div>
    //     <div className='float-right flex gap-2 h-6'>
    //         <img className="h-full object-contain invert" src="linkedin.svg"></img>
    //         <img className="h-full object-contain invert" src="xing.svg"></img>
    //         <img className="h-full object-contain invert" src="youtube.svg"></img>
    //         <img className="h-full object-contain invert" src="github.svg"></img>
    //     </div>
    // </div>
    <section className="top-nav flex flex-row items-center justify-between h-12 text-[--whiteish]">
    <div>
      Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" className='checked:h-full '/>
    <label className='menu-button-container hidden h-full w-8 cursor-pointer flex-col justify-center items-center' htmlFor="menu-toggle">
    <div className='menu-button before:content-none'></div>
  </label>
    <ul className="menu flex list-none">
      <li className='mx-4'>One</li>
      <li className='mx-4'>Two</li>
      <li className='mx-4'>Three</li>
      <li className='mx-4'>Four</li>
      <li className='mx-4'>Five</li>
    </ul>
  </section>
  )
}

export default LinkHeader