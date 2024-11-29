import React, { useState } from 'react';
import './App.css';
import Header from './homepage/header/Header';
import Footer from './homepage/footer/Footer';
import Body from './homepage/Header/body';
import SpeakText from './components/SpeakText';

function App() {
  const [textToSpeak, setTextToSpeak] = useState("Hello, world!");

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
