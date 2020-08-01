import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import CityList from './Components/CityList.jsx';
import FiveDaysWeather from './Components/fiveDaysWeather'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [weatherData, setWeatherData] = useState([])
  return (
    <Router>
      <div className="App">
          <h1 className="title">Weather App</h1>
          <Switch>
            <Route exact path="/" >
                 <Search weatherData={weatherData} setWeatherData={setWeatherData}/>
                 {weatherData.length > 0 ? <CityList setWeatherData={setWeatherData} weatherData={weatherData}></CityList> : <p>Please Write the city name to get its current weather </p> }
            </Route>
            <Route exact path="/:id" >
              <FiveDaysWeather></FiveDaysWeather>
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;