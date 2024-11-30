import React, { useState } from "react";
import "./ExtendableDiv.css";
import SpeakText from "../components/SpeakText";
import gif from "../assets/gifs/2.gif";
import { gifList } from "../assets/GifList";
const ExtendableDiv = (props) => {
  const [brainrot, setBrainrot] = useState(false);
  const [randomizedVideo, setRandomizedVideo] = useState(0);
  // const gifs = gifList.forEach((gifItem) => {
  //   require(gifItem.link);
  // });

  const handleSpeak = (text, voice) => {
    SpeakText(text, voice);
  };

  return (
    <div className="extendableDiv extendableDiv--iphone_frame_styling">
      <div className="extendableDiv--iphone_upper">
        <div className="extendableDiv--iphone_upper--decor"></div>
      </div>
      <div className="extendableDiv--buttons">
        <button
          onClick={() => {
            setBrainrot(!brainrot);
            if (!brainrot) {
              const randomizedVoice = Math.floor(Math.random() * 3);
              setRandomizedVideo(Math.floor(Math.random() * gifList.length));
              handleSpeak(props.text, randomizedVoice);
            } else {
              window.speechSynthesis.cancel(); // when HelpMeFocus mode is off, stop speech
            }
          }}
        >
          {!brainrot ? "HELP ME FOCUS!" : "STOP NO MORE"}
        </button>
        {brainrot ? (
          <>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
              <button>MORE DETAILS!!!</button>
            </a>
          </>
        ) : null}
      </div>
      <div className={`extendableDiv--content`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Joke #{props.id}
        </div>
        <div
          className={`extendableDiv--text ${
            brainrot ? "extendableDiv--contract" : ""
          }`}
        >
          {props.text}
        </div>
        {brainrot ? (
          <div className="extendableDiv--brainrot">
            <img src={gifList[randomizedVideo].link} alt="" />
          </div>
        ) : null}
      </div>
      <div className="extendableDiv--iphone_lower">
        <div className="extendableDiv--iphone_lower--decor"></div>
      </div>
    </div>
  );
};

export default ExtendableDiv;
