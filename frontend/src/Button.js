import React, { useContext } from 'react';
import { DogContext } from './DogContext';

function Button(){
    const {state, changeState} = useContext(DogContext);

    return (
        <button onClick={changeState} className='button-class'>
            Test Changing State
        </button>
    );
}

export default Button;