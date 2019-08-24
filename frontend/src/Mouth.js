import React, { useContext } from 'react';
import { DogContext } from './DogContext';
import './Mouth.css';


function Mouth(props){

    // state can be happy or sad
    const {state, changeState} = useContext(DogContext);

    const class_name = state === "sad" ? "sad-mouth" : "mouth"; 

    return (
        <div className={class_name}>
            <div className="tongue"></div>
        </div>
    );
}

export default Mouth;