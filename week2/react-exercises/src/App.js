import React from 'react';
import Friend from './Components/newFriends/Friend';
import DogGallery from './Components/dogPhoto/DogGallery';
import RandomJokes from './Components/randomJokes/RandomJokes';

function App() {
  return (
    <div>
      <Friend></Friend>
      <DogGallery></DogGallery>
      <RandomJokes></RandomJokes>
    </div>
  );
}

export default App;
