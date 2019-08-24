import React, { useContext } from 'react';
import { DogContext } from './DogContext';
import './Bone2.css';

function Bone2(){
    const {state, changeState} = useContext(DogContext);

   

    return (
        <div className = 'bone2' />
        
    );
}

export default Bone2;