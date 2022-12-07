import React from "react";
import ReactDOM from "react-dom";
import ringer from "./Anime WOW sound.mp3";
import "./App.css";

const Sound = () => {
  const audio = new Audio(ringer);
  audio.loop = true;

  return (
    <div>
      <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.loop = false)}>Pause</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
