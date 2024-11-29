import React, { useState } from 'react';
import './App.css';
import Header from './homepage/Header/Header';
import Footer from './homepage/Footer/Footer';
import Body from './homepage/Header/body';
import SpeakText from './components/SpeakText';
import ExtendableDiv from './components/ExtendableDiv';

function App() {
  const [textToSpeak, setTextToSpeak] = useState("hello ban Khang");

  const handleInputChange = (event) => {
    setTextToSpeak(event.target.value);
  };

  const handleSpeak = () => {
    SpeakText(textToSpeak);
  };

  return (
    <div className="App">
      <Header />
      <Body />
      <ExtendableDiv text={'hello ban Khang'}/>
      <div>
        <input
          type="text"
          value={textToSpeak}
          onChange={handleInputChange}
          placeholder="Enter text to speak"
        />
        <button onClick={handleSpeak}>Speak</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
