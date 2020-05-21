import React, { useContext } from 'react';
import { DogContext } from './DogContext';
import './Bone.css';

function Bone(){
    const {state, changeState} = useContext(DogContext);

   

    return (
        <button onClick={changeState} className='bone'>
            Scooby Snack
        </button>
    );
}

export default Bone;