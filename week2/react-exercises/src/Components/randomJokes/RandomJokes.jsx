import React, {useState, useEffect} from 'react'
import Jokes from './Jokes'

const RandomJoke = () => {
    const [joke, setJoke] = useState({});

    const getJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setJoke(data)
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        getJoke();
        
    }, [])




    return (
        <Jokes joke={joke}></Jokes>
     );
}
 
export default RandomJoke;