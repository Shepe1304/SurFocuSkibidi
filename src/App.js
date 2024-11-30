import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import React, { useState } from "react";
import Header from "./homepage/header/Header";
import Footer from "./homepage/footer/Footer";
import { gifList } from "./assets/GifList";

function App() {
  const [brainrot, setBrainrot] = useState(false);
  const [randomizedVideo, setRandomizedVideo] = useState(0);

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
        <ExtendableDiv
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque officia incidunt adipisci tempora inventore nostrum magnam veritatis consequatur aliquam, tenetur optio quis magni iusto possimus voluptatem fugit sequi vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque officia incidunt adipisci tempora inventore nostrum magnam veritatis consequatur aliquam, tenetur optio quis magni iusto possimus voluptatem fugit sequi vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque officia incidunt adipisci tempora inventore nostrum magnam veritatis consequatur aliquam, tenetur optio quis magni iusto possimus voluptatem fugit sequi vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque officia incidunt adipisci tempora inventore nostrum magnam veritatis consequatur aliquam, tenetur optio quis magni iusto possimus voluptatem fugit sequi vitae."
          }
        />
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
