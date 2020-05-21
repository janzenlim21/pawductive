import React, { useContext } from 'react';
import { DogContext } from './DogContext';
import soundfile from './puffy_dog.mp3';
import Sound from 'react-sound';


function NoiseTrigger(props){

    // state can be happy or sad
    const {state} = useContext(DogContext);
    var url = './puffy_dog.mp3';
    var audio = new Audio(url);
    audio.play();
    if (state === "sad"){
        return (
            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                
            />
        );
    }
    else{
        return (
            <div></div>
        );
    }
    
}

export default NoiseTrigger;