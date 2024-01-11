import React from "react";
import CodeContainer from "./CodeContainer";
import Bar from "./Bar";

function Container({ isOpenCode }, props) {
//  console.log(isOpenCode);
  return (
    <div className="flex">
      <div>
        {isOpenCode ? <CodeContainer key="code-container" /> : ""}

        {/* render the no of bars */}
      </div>
      <Bar height="12" />
      <Bar height="8" />
    {/* <Bar height="16" /> */}
    </div>
  );
}

export default Container;
