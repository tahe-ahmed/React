import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {HobbyList} from './Hobby.js';
import {Guarantee} from './CustomerSer';
import delivery from './imgs/f-delivery.png';
import coin from './imgs/coin.png';
import chat from './imgs/chat.png'


function App() {
  return (
    <div className="App">
      <h1>hello </h1>
      <HobbyList></HobbyList>
      <Guarantee img={delivery} name={"delivery image"} title={"Free Shipping"} desc={"some description"}></Guarantee>
      <Guarantee img={coin} name={"coin image"} title={"100% Money back"} desc={"some description"}></Guarantee>
      <Guarantee img={chat} name={"chat image"} title={"Online support 24/7"} desc={"some description"}></Guarantee>
    </div>
  );
}

export default App;
