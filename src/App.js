import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Weather App</h1>
      </header>
      <Weather defaultCity ="Columbus" />
      <footer>
        This project was coded by{" "}
        <a href="https://polite-lolly-42a4da.netlify.app/" target="_blank" rel="noopener noreferrer">
          Ben Stewart
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Benstewart17/project-react-weather-app" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
        </a> and{" "}
        <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
      </div>
    </div>

  );
}


