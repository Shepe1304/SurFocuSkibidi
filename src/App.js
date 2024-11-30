import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import React, { useState } from "react";
import Header from "./homepage/header/Header";
import Footer from "./homepage/footer/Footer";
import { gifList } from "./assets/GifList";
import { jokes } from "./assets/Jokes";

function App() {
  const [brainrot, setBrainrot] = useState(false);
  const [randomizedVideo, setRandomizedVideo] = useState(0);
  const [jokeId, setJokeId] = useState(0);

  return (
    <div className="App--container">
      <div className={`App ${brainrot ? "App--brainrot_resize" : ""}`}>
        <button
          onClick={() => {
            setBrainrot(!brainrot);
            setRandomizedVideo(Math.floor(Math.random() * gifList.length));
          }}
        >
          {!brainrot ? "HELP ME FOCUS!" : "STOP ITTT"}
        </button>
        <Header />
        <div className="App--jokes">
          {/* {jokes.map((joke) => {
            return <ExtendableDiv text={joke.content} />;
          })} */}
          <button
            onClick={() => {
              setJokeId((jokeId - 1 + jokes.length) % (jokes.length - 2));
            }}
          >
            {"<=="}
          </button>
          <ExtendableDiv text={jokes[jokeId].content} />
          <ExtendableDiv text={jokes[jokeId + 1].content} />
          <ExtendableDiv text={jokes[jokeId + 2].content} />
          <button
            onClick={() => {
              setJokeId((jokeId + 1) % (jokes.length - 2));
            }}
          >
            {"==>"}
          </button>
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
