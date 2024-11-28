import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import SpeakText from "./components/SpeakText";
import React, { useState } from "react";
import Header from "./homepage/Header/Header";

function App() {
  const [textToSpeak, setTextToSpeak] = useState("Dit me may Minh Tam.");

  const handleInputChange = (event) => {
    setTextToSpeak(event.target.value);
  };

  const handleSpeak = () => {
    SpeakText(textToSpeak);
  };
  return (
    <div className="App">
      <Header />
      <div>
        <input type="text" value={textToSpeak} onChange={handleInputChange} />
        <button onClick={handleSpeak}>Speak</button>
      </div>
    </div>
  );
}

export default App;
