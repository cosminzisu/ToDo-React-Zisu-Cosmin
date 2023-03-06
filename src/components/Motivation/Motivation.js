import React, { useState } from "react";
import "./Motivation.css";

const motivationalmessages = [
  "When you have a dream, you've got to grab it and never let go.",
  "There is nothing impossible to they who will try.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You define your own life. Don't let other people write your script.",
  "You are never too old to set another goal or to dream a new dream.",
  "Rome wasn't built in a day."

];

const getRandomMessage = () => {
  return motivationalmessages[
    Math.floor(Math.random() * motivationalmessages.length)
  ];
};

function Motivation() {
  const [motivationalmessages, setMotivationalMessages] = useState(
    getRandomMessage()
  );
  const RandomMessage = () => {
    const randomMotivationalMessage = getRandomMessage();
    setMotivationalMessages(randomMotivationalMessage);
  };

  return (
    <div className="motivationbox">
      <p className="tmotiv">Motivational quote</p>
      <h2 className="motivation">{motivationalmessages}</h2>
      <p>{RandomMessage}</p>
    </div>
  );
}

export default Motivation;