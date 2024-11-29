import React, { useState } from "react";
import "./ExtendableDiv.css";
import SpeakText from "../components/SpeakText";
import gif from "../assets/gifs/2.gif";

const ExtendableDiv = (props) => {
  const [brainrot, setBrainrot] = useState(false);

  // const [textToSpeak, setTextToSpeak] = useState("Dit me may Minh Tam.");

  // const handleInputChange = (event) => {
  //   setTextToSpeak(event.target.value);
  // };

  const handleSpeak = () => {
    SpeakText(props.text);
  };

  return (
    <div className="extendableDiv">
      <button
        onClick={() => {
          setBrainrot(!brainrot);
          handleSpeak();
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
