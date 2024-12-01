import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import React, { useState } from "react";
import Header from "./homepage/Header/Header";
import Footer from "./homepage/Footer/Footer";
import { gifList } from "./assets/GifList";
import { jokes } from "./assets/Jokes";
import leftArrow from "./assets/images/leftArrow.png";

function App() {
  const [brainrot, setBrainrot] = useState(false);
  const [randomizedVideo, setRandomizedVideo] = useState(0);
  const [jokeId, setJokeId] = useState(0);

  return (
    <div className="App--container">
      <div className={`App ${brainrot ? "App--brainrot_resize" : ""}`}>
        <div className="App--button">
          <button
            onClick={() => {
              setBrainrot(!brainrot);
              setRandomizedVideo(Math.floor(Math.random() * gifList.length));
            }}
            className="App--open_brainrot"
          >
            {!brainrot ? "CLICK ME TO FOCUS!" : "STOP FOCUSING"}
          </button>
        </div>
        <Header />
        <div className="App--jokes">
          {/* {jokes.map((joke) => {
            return <ExtendableDiv text={joke.content} />;
          })} */}
          <div
            onClick={() => {
              setJokeId((jokeId - 3 + jokes.length) % jokes.length);
            }}
            className="App--before"
          >
            <img src={leftArrow} alt="Arrow Left" />
          </div>
          <ExtendableDiv text={jokes[jokeId].content} id={jokes[jokeId].id} />
          <ExtendableDiv
            text={jokes[(jokeId + 1) % jokes.length].content}
            id={jokes[(jokeId + 1) % jokes.length].id}
          />
          <ExtendableDiv
            text={jokes[(jokeId + 2) % jokes.length].content}
            id={jokes[(jokeId + 2) % jokes.length].id}
          />
          <div
            onClick={() => {
              setJokeId((jokeId + 3) % jokes.length);
            }}
            className="App--next"
          >
            <img src={leftArrow} alt="Arrow Right" />
          </div>
        </div>
        <Footer />
      </div>
      {brainrot ? (
        <div className="App--brainrot_container">
          <div className="App--brainrot">
            <img src={gifList[randomizedVideo].link} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
