import React from 'react';


export function Guarantee(props) {
    return (
        <div style={{width: '32%'}}>
            <img src={props.img} alt={props.name} />
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}