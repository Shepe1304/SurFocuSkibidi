import './App.css';
import ExtendableDiv from './components/ExtendableDiv';
import Header from './homepage/Header/Header';
import SpeakText from './components/SpeakText';
import React, {useState} from 'react';
import Body from './homepage/Header/body';

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
     <Body />
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
