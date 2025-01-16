import React from 'react';
import NavWheel from './NavWheel';

interface Props {}

function IconWheel({}: Props) {
  return (
    <div className="banner w-full h-[200px] text-center overflow-hidden relative">
      <div className="slider absolute w-[200px] h-[250px] top-[10%] left-[calc(50%-100px)]" style={{ ["--quantity"]: 5 } as any}>
        {/* <div className='w-[200px] h-[100px] bg-black absolute'>test</div> */}
        <div className="item" style={{ ["--position"]: 1 } as any}>
          <a href="https://www.flaticon.com/free-icons/dragon"><img draggable="false" src="dragon_1.jpg" alt="01"  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/></a>
        </div>
        <div className="item" style={{ ["--position"]: 2 } as any}>
          <img draggable="false" src="dragon_2.jpg" alt="02"  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 3 } as any}>
          <img draggable="false" src="dragon_3.jpg" alt="03"  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 4 } as any}>
          <img draggable="false" src="dragon_4.jpg" alt="04"  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 5 } as any}>
          <img draggable="false" src="dragon_5.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        {/* <div className="item" style={{ ["--position"]: 6 } as any}>
          <img draggable="false" src="dragon_6.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 7 } as any}>
          <img draggable="false" src="dragon_7.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 8 } as any}>
          <img draggable="false" src="dragon_8.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 9 } as any}>
          <img draggable="false" src="dragon_9.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div>
        <div className="item" style={{ ["--position"]: 10 } as any}>
          <img draggable="false" src="dragon_10.jpg" alt=""  style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}/>
        </div> */}
        
      </div>

      {/* <div className="content">
            <h1 data-content="CSS ONLY">
                CSS ONLY
            </h1>
            <div className="author">
                <h2>LUN DEV</h2>
                <p><b>Web Design</b></p>
                <p>
                    Subscribe to the channel to watch many interesting videos
                </p>
            </div>
            <div className="model"></div>
        </div> */}
    </div>
  );
}

export default IconWheel;