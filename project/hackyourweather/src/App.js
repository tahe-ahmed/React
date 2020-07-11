import React from 'react';
import './App.css';
import CityList from './Component/CityList';
import weatherData from './city-weather.json';


function App() {
  return (
    <div className="App">
      <h1 className="title">Weather</h1>
      <CityList weatherData={weatherData}/>
    </div>
  );
}

export default App;
