import React, { Component } from "react";
import "./App.css";

const PLACES = [
    { name: "Kiev", zip: "02000" },
    { name: "Lviv", zip: "79000" },
    { name: "Kharkiv", zip: "61000" },
    { name: "Odessa", zip: "65000" }
];

class WeatherDisplay extends Component {
  render() {
    return <h1>Displaying weather for city {this.props.zip}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log("Clicked index " + index);
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay zip={"12345"} />
      </div>
    );
  }
}

export default App;