import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

function CodeContainer() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {/* dynamic code block */}
      <details className="dropdown w-full mt-3">
        <summary className="btn rounded-none">
          Merge Sort <FaAngleDown />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 w-52">
          <li>
            <span>Bubble Sort</span>
          </li>
          <li>
            <span>Selection Sort</span>
          </li>
        </ul>
      </details>

      <div className="w-52 h-screen mt-2">
        <div className="mockup-code rounded-none h-full">
          {/* code changes depeding on the dropdown */}
          <pre data-prefix="1">
            <code>your code</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}

export default CodeContainer;
