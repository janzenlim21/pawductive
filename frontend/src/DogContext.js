import React, { createContext, useState } from 'react';

export const DogContext = createContext();

function DogContextProvider(props){
    const [state, setState] = useState("happy");

    function changeState(){
        setState( prev => prev === "happy" ? "sad" : "happy");
    }

    return (
        <DogContext.Provider value = {{state, changeState}}>
            {props.children}
        </DogContext.Provider>
    );
}

export default DogContextProvider;