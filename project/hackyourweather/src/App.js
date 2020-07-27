import React from 'react';
import './App.css';
import Search from './Component/Search';
import weatherData from './city-weather.json';

function App() {
  return (
    <div className="App">
      
        <h1 className="title">Weather</h1>
        <Search />

    </div>
  );
}

export default App;
