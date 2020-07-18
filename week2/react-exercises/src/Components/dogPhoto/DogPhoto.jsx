import React from 'react'

const DogPhoto = ({dogPhotos}) => {
    return (
        <React.Fragment>
            {dogPhotos.length >0 ? dogPhotos.map((adog, index) => <img key={index} src={adog} alt="my dogs pic" width='100px'/>)  : <p>Get your first dog by clicking the button!</p>}
        </React.Fragment>
        
    );
}
 
export default DogPhoto;
