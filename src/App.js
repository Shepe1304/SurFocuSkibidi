import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import React, { useState } from "react";
import Header from "./homepage/Header/Header";
import Footer from "./homepage/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ExtendableDiv text={"AP protein"} />
      {/* <div>
        <input type="text" value={textToSpeak} onChange={handleInputChange} />
        <button onClick={handleSpeak}>Speak</button>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
