import React, { useState } from "react";
import "./ExtendableDiv.css";
import gif from "../assets/gifs/2.gif";

const ExtendableDiv = (props) => {
  const [brainrot, setBrainrot] = useState(false);

  return (
    <div className="extendableDiv">
      <button
        onClick={() => {
          setBrainrot(!brainrot);
        }}
      >
        HELP ME FOCUS!
      </button>
      <div className={`extendableDiv--content`}>
        <div
          className={`extendableDiv--text ${
            brainrot ? "extendableDiv--contract" : ""
          }`}
        >
          {props.text}
        </div>
        {brainrot ? (
          <div className="extendableDiv--brainrot">
            <img src={gif} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExtendableDiv;
