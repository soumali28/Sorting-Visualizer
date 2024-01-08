import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
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
      <div className="flex items-center justify-center">
        <span className="text-3xl my-3">Sorting Visualizer </span>
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
