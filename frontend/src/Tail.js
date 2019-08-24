import React, { useContext } from 'react';
import { DogContext } from './DogContext';
import './Tail.css';

function Tail(){
    const {state, changeState} = useContext(DogContext);

    const class_name = state === "happy" ? "tail" : "tail-sad";

    return (
        <div className={class_name} />
    );
}

export default Tail;