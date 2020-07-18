import React from 'react'

const FriendProfile = ({friend}) => {
    return (
        <div>
            <ul>
                <li>Name : {friend.name.title} {friend.name.first} {friend.name.last}</li>
                <li>Address: {friend.location.city}, {friend.location.state}, {friend.location.country}</li>
                <li>Email : {friend.email} </li>
                <li>Phone Number : {friend.phone} </li>
            </ul>
        </div>
      );
}
 
export default FriendProfile;