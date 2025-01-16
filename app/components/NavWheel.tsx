import React from 'react'

type Props = {}

function NavWheel({}: Props) {
  return (
    <div className='Container'>
        
        <div className='Wheel' style={{ ["--quantity"]: 5 } as any}>
            <div className='Protagonist'style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}><img draggable="false" src="mad.png" alt="proto" /></div>
            <div className='Circle'></div>
            <div className='Circle2'></div>
            <div className='Circle3'></div>
            
            <div className='Seat' style={{ ["--position"]: 1 } as any}>
                <a className='Preserve' href="https://www.w3schools.com/css/css_comments.asp">
                <div className='NavIcon'>
                <svg className='absolute left-[-4px] top-[-3px] w-[31px] h-[31px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.53 13.47C8.82 13.76 8.82 14.24 8.53 14.53C8.38 14.68 8.19 14.75 8 14.75C7.81 14.75 7.62 14.68 7.47 14.53L5.47 12.53C5.18 12.24 5.18 11.76 5.47 11.47L7.47 9.47C7.76 9.18 8.24 9.18 8.53 9.47C8.82 9.76 8.82 10.24 8.53 10.53L7.06 12L8.53 13.47ZM13.69 9.96L11.69 14.63C11.57 14.91 11.29 15.08 11 15.08C10.9 15.08 10.8 15.06 10.71 15.02C10.33 14.86 10.15 14.42 10.32 14.03L12.32 9.36C12.48 8.98 12.92 8.8 13.3 8.97C13.68 9.14 13.85 9.58 13.69 9.96ZM18.53 12.53L16.53 14.53C16.38 14.68 16.19 14.75 16 14.75C15.81 14.75 15.62 14.68 15.47 14.53C15.18 14.24 15.18 13.76 15.47 13.47L16.94 12L15.47 10.53C15.18 10.24 15.18 9.76 15.47 9.47C15.76 9.18 16.24 9.18 16.53 9.47L18.53 11.47C18.82 11.76 18.82 12.24 18.53 12.53Z" fill="#ffffff"></path> </g></svg>
                Code
                </div>
                </a>
            </div>

            <div className='Seat' style={{ ["--position"]: 2 } as any}>
                <div className='NavIcon'>
                    Design
                </div>
            </div>

            <div className='Seat' style={{ ["--position"]: 3 } as any}>
                <div className='NavIcon'>
                    Projects
                </div>
            </div>

            <div className='Seat' style={{ ["--position"]: 4 } as any}>
                <div className='NavIcon'>
                    Life
                </div>
            </div>

            <div className='Seat' style={{ ["--position"]: 5 } as any}>
                <div className='NavIcon'>
                    About
                </div>
            </div>

        </div> 
         
    </div>
  )
}

export default NavWheel