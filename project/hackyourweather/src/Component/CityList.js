import React from 'react';

// component to render the signal cards 
function CityCard({cityData}) {
    // fetching the data from the .json file 
    const {name, sys : {country}, weather :[{main, description}], main : {temp_min, temp_max}, coord : {lon, lat}, id } = cityData;

    return (
        <div className='card-container' key={id}>
            <h2>{name}, {country}</h2>
            <div>
                <h3>{main}</h3>
                <p>{description}</p>
            </div>
            {/* show the temp in celsius degree temp system  */}
            <p>Min Temp : {(temp_min - 273.15).toFixed(3)} &#x2103;</p>
            <p>Max Temp : {(temp_max - 273.15).toFixed(3)} &#x2103;</p>
            <p>Location :{lat}, {lon}</p>
        </div>
    )
}

// default compponent
export default function CityList({weatherData}) {
    // the weatherData comes from the app.js as props
    return (
        <div className="container">
            {weatherData.map(cityData => <CityCard cityData={cityData}/>)}   
        </div>
    )
}