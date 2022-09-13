import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Der Lee-Thao and is{" "}
          <a href="https://github.com/derleethao/react-weather-app">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
