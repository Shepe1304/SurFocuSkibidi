// SpeakText.js

export default function SpeakText(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else  
    {
      alert('Speech synthesis not supported');
    }
  }