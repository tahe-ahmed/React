import React, {useState} from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);

    const getDogPhoto = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setDogPhotos([...dogPhotos, data.message])
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div>
            <Button getDogPhoto={getDogPhoto}/>
            {dogPhotos && <DogPhoto dogPhotos={dogPhotos} />}    
        </div>
      );
}
 
export default DogGallery;