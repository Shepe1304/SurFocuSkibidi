// SpeakText.js

export default function SpeakText(text) {
    //default so the main thing being exported from this file, easily imported and used
    if ('speechSynthesis' in window) {
        // speechSynthesis is an API that allows us to speak text
        // if the browser supports speechSynthesis, we can use it to speak text 
        // window object is the global object in JavaScript
      const utterance = new SpeechSynthesisUtterance(text); //create object because we can edit it properties (lang, voice, volume,..) 
      let voices = window.speechSynthesis.getVoices(); //get the voices from the browser
        utterance.voice = voices[3]; //get the voice from the array of voices
        window.speechSynthesis.speak(utterance);
    } else  
    {
      alert('Speech synthesis not supported');
    }
  }