import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Weather App</h1>
      <Weather defaultCity ="Columbus" />
      </header>
      <footer>
        This project was coded by{" "}
        <a href="https://polite-lolly-42a4da.netlify.app/" target="_blank">
          Ben Stewart
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Benstewart17/weather-react-three" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>

  );
}

export default App;
