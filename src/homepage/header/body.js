import React, { useState } from "react";
import "./body.css";

const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "What did the ocean say to the shore? Nothing, it just waved."
];

const Body = () => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const handleNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
  };

  const handlePreviousJoke = () => {
    setCurrentJokeIndex((prevIndex) =>
      prevIndex === 0 ? jokes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="body">
      <button className="arrow left-arrow" onClick={handlePreviousJoke}>
        &#8592;
      </button>
      <div className="joke">{jokes[currentJokeIndex]}</div>
      <button className="arrow right-arrow" onClick={handleNextJoke}>
        &#8594;
      </button>
    </div>
  );
};

export default Body;
