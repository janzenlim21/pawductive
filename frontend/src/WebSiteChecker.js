import React, { useContext, useEffect } from 'react';
import { DogContext } from './DogContext';
import { delay } from 'q';
import {observable} from 'mobx';


function WebSiteChecker(){
    const {changeState} = useContext(DogContext);
    //window.onfocus = changeState;
    useEffect(() => {
        window.onblur = changeState;
        window.onfocus = function(){
            setTimeout(function(){

                changeState();
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