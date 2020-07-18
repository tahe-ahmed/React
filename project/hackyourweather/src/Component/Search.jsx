import React, {useState, useEffect} from 'react';
import CityCard from './CityCard.jsx';

const Search = () => {
    const [cityName, setcityName] = useState('London');
    const [weatherCity, setweatherCity] = useState({});
    const [shouldFetchData, setshouldFetchData] = useState([1]);

    const fetchWeatherData = (cityName) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            if(data.cod === 200){
                setweatherCity(data)
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    const handleChange = (event) => {
        setcityName(event.target.value);
    };
    
    const handleSubmit = (event) => {
        console.log("a name was submitted : " + cityName);
        (shouldFetchData[0] === 1) ? setshouldFetchData([0]):setshouldFetchData([1]);
        event.preventDefault();
    };
    useEffect(() => {
        fetchWeatherData(cityName);
        setcityName(''); 
    },[shouldFetchData])

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={cityName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {weatherCity.cod === 200 ? <CityCard weatherCity={weatherCity}></CityCard> : <p>failed fetching</p>}
        </div> 
    );
      
}

export default Search;