import React from 'react'

function TimelineSite() {
  return (
    <div className='kanit-light text-[--whiteish] border-2 border-red-600 md:border-green-400 lg:border-blue-400 xl:border-orange-400 w-[80%] m-auto h-full md:text-xl lg:text-2xl kanit-light'>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 350 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2018 - 2025 &emsp; Technical Director / 3D Artist @ mds Designagentur GmbH</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 300 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>20XX - 2018 &emsp; Technical Director / 3D Artist @ VINX / Mainworks / Sunday</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 250 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2009 - 20XX &emsp; Artist @ ADP Gauselmann</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 200 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2008 Diplom FH Augsburg</div></div></div>
        <div className='timelineCircle'><div className='timelineLine' style={{ ["--lineLength"]: 150 } as any}><div className='text-nowrap text-[--whiteish] pl-6'>2004 Abitur Maristenkolleg Mindelheim</div></div></div>
    </div>
    
    // <div className="item" style={{ ["--position"]: 2 } as any}>
  )
}

export default TimelineSite