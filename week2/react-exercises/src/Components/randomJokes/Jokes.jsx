import React from 'react'

const Jokes = ({joke}) => {

    return (
        <div>
            <p>
                {joke.setup}
            </p>
            <p>
                {joke.punchline}
            </p>
        </div>

    );
}
 
export default Jokes;