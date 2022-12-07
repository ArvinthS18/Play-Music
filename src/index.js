import React from "react";
import ReactDOM from "react-dom";
import ringer from "./Anime WOW sound.mp3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Sound = () => {
  const audio = new Audio(ringer);
  audio.loop = true;

  return (
    <div>
      <br></br>
      <h2 className="normal" align="center" style={{ color: "red" }}>
        <b>Sound Player</b>
      </h2>
      <h3 align="center" style={{ color: "green" }}>
        <b>click the button to hear!</b>
      </h3>
      <center>
        {" "}
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            audio.loop = true;
            audio.play();
          }}
        >
          Click to Play
        </button>
      </center>

      <br></br>
      <center>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => (audio.loop = false)}
        >
          Click to Pause
        </button>
      </center>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
