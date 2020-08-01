import React from 'react';
import CityCard from './CityCard';

const cityList = ({weatherData, setWeatherData}) => {
    return (
        <div>
            {weatherData.map(cityWeatherData => {
                return <CityCard key={cityWeatherData.id} cityWeatherData={cityWeatherData} setWeatherData={setWeatherData} weatherData={weatherData}/>
            })}
        </div>
    )
}

export default cityList;