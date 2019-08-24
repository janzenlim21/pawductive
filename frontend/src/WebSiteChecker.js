import React, { useContext, useEffect } from 'react';
import { DogContext } from './DogContext';
import { delay } from 'q';
import {observable} from 'mobx';


function WebSiteChecker(){
    const {changeState} = useContext(DogContext);
    //window.onfocus = changeState;
    useEffect(() => {
        window.addEventListener('blur',function(e){
            e.preventDefault();
            e.stopPropagation();
            changeState();
        })
        
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