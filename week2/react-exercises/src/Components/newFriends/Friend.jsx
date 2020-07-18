import React, {useState} from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

const Friend = () => {
    const [friend, setFriend] = useState({});

    const getFriend = () => {
        fetch('https://www.randomuser.me/api?results=1')
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setFriend(data.results[0])
        })
        .catch(err => {
            console.log(err);
        });
    };

    return ( 
        <div>
            <Button getFriend={getFriend}/>
            {friend.name && <FriendProfile friend={friend} />}            
        </div>

     );
}
 
export default Friend;