import './App.css';
import ExtendableDiv from './components/ExtendableDiv';
import Header from './homepage/Header/Header';
import SpeakText from './components/SpeakText';
import React, {useState} from 'react';

function App() {
  const [textToSpeak, setTextToSpeak] = useState("Hello, this is a test.");

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
      <input
        type="text"
        value={textToSpeak}
        onChange={handleInputChange}
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
    </div>
  );
}

export default App;
