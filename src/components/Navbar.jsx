import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { FiMoon, FiSun } from "react-icons/fi";
import CodeContainer from "./CodeContainer";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenCode, setCodeOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const toggleCodeOpen = () => {
    setCodeOpen(!isOpenCode);
  };
  return (
    <>
      <div className="flex items-center justify-between mx-8 my-4">
        <span className="text-3xl">Sorting Visualizer </span>
        <div>
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="cmyk" />

            {/* sun icon */}
            <FiSun className="swap-on flex" fontSize={26}/>

            {/* moon icon */}
            <FiMoon className="swap-off" fontSize={26}/>
          </label>
        </div>
      </div>
      <div className="navbar bg-base-100 flex">
        <div className="flex-none mx-2">
          <button className="btn btn-square btn-ghost" onClick={toggleCodeOpen}>
            <RiMenu2Line fontSize={18} />
          </button>
        </div>
        <div className="flex-1 shrink">
          <button className="btn btn-outline text-lg mx-3">Play</button>
          <button className="btn btn-outline text-lg mx-3">New Array</button>
        </div>
        <div className={`max-md:flex-col  ${isOpen ? "" : "max-md:hidden"}`}>
          <div className="mx-3">
            <label for="length">Length:</label>
            <input
              id="length"
              name="length"
              type="range"
              min={0}
              max="100"
              //value="30"
              className="range range-accent range-xs "
            />
          </div>
          <div className="mx-3">
            <label for="speed">Speed:</label>
            <input
              id="speed"
              name="speed"
              type="range"
              min={0}
              max="100"
              //value="10"
              className="range range-success range-xs "
            />
          </div>
        </div>
        <div className="flex-none mx-2">
          <button className="inline-block md:hidden btn btn-square btn-ghost">
            <CiMenuKebab onClick={toggleOpen} />
          </button>
        </div>
      </div>
      {isOpenCode ? <CodeContainer /> : ""}
    </>
  );
}

export default Navbar;
