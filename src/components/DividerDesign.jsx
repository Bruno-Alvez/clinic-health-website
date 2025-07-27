import React from "react";

function DividerDesign() {
    return(
       <div className="relative mt-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C600,100 600,0 1200,100 L1200,0 L0,0 Z"
              fill="#F27E7E"
              fillOpacity="0.9"
            ></path>
           </svg>
        </div>
    )
}

export default DividerDesign