import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Videocard() {
  const [first, setfirst] = useState(
    "ho two words| there are fond of reassons  reactjs | in two ho ok so its htere iare fisdofj  is ndone to makke it more compesurs"
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array for mount and unmount only

  return (
    
    <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[23%] max-h-full  ">
      <Link to={`/video/:videoId`}>
      <div className="w-full overflow-hidden bg-red-400  h-40 rounded-2xl ">
        <img src="sg.jpg" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex">
        <div className="p-1 pt-3">
          {/* photo */}
          <div className="rounded-full w-6 h-6 ">
            <img className="rounded-full" src="sg.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className=" font-semibold leading-4 bg-transparent text-white p-1 pt-3 max-h-11 overflow-hidden">
            {/* title */}
            {windowWidth > 640
              ? (first.length > 60
                ? first.substring(0, 55) + " ..."
                : first)
              : null}
            {windowWidth < 400
              ? (first.length > 85
                ? first.substring(0, 85) + " ..."
                : first)
              : null}
            {windowWidth > 400 && windowWidth < 640
              ? (first.length > 120
                ? first.substring(0, 140) + " ..."
                : first)
              : null}
          </div>
          <div>
            <div className="text-gray-500 text-sm font-bold pt-1">
              {/* owner */}
              Hitesh choudhary
            </div>
            <div className="flex text-gray-500 text-sm gap-3">
              <div>
                {/* view */}
                100 views
              </div>
              <div>{/* upload time */}• 2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Videocard;
