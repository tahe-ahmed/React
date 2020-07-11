import React from 'react'

function Hobbies(props) {
    return (
        <li>{props.hobby}</li>
    )
}

export function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return (
        <div>
            <ul>
                {hobbies.map((hobby,index) => <Hobbies hobby={hobby} key={index}/>)}
           </ul>
        </div>
    )
}

