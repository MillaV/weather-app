import './App.css';
import React, { useEffect, useState } from "react";
import { Container } from 'semantic-ui-react';


function App() {

  const [temperature, setTemperature] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [icon, setIcon] = React.useState('');
  const [city, setCity] = React.useState('');
  const[isReady,setReady]= React.useState(false);

  const inputChanged = ( event)  => {
    setCity(event.target.value);
  };

  const getWeather = () => {

  //React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp)
        setDescription(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setReady(true)

      })
      .catch(err => console.error(err))
  //})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather app
        </h1>
      </header>

      <body className="App-body">

        <p className="App-bold">Find current weather of your city: </p>
        
        <input className="App-input"
          type= "text"
          name="city"
          value= {city}
          onChange= {inputChanged}
          placeholder="City name..."
        > 
        </input>

        <button className={"App-button"} onClick={getWeather}>Search</button>
        
        <h4> {city} </h4>
        <p>Temperature: {(temperature-273.15).toFixed(1)} Celsius</p>
        <p>Weather: {description}</p>
        <img src= {`${process.env.REACT_APP_ICON_URL}`+(icon)+'@2x.png'} />

      </body>

    </div>
  );
}

export default App;


