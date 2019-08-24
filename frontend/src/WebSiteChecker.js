import React, { useContext, useEffect } from 'react';
import { DogContext } from './DogContext';
import { delay } from 'q';
import {observable} from 'mobx';


function WebSiteChecker(){
    const {setStateSad, setStateHappy} = useContext(DogContext);
    //window.onfocus = changeState;
    useEffect(() => {
        window.onblur = setStateSad;
        window.onfocus = function(){
            setTimeout(function(){

                setStateHappy();
            }, 3000);
            
        }
        
    });
    return (
        <div>{
        }</div>
    );
}



function goodWebsite(changeState){
    delay(3000);
    changeState();
}

export default WebSiteChecker;