import React from 'react';
import './dog.css';
import Mouth from './Mouth';
import Tail from './Tail';

function Dog(props){
    return (
        <div className="dog">
            <div className="ears"></div>
        
            <div className="body">
                <div className="eyes"></div>
                <div className="beard">
                    <Mouth />
                </div>
                <div className="belt">
                    <div className="locket"></div>
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    <div className="dot dot4"></div>
                    <div className="tag"></div>
                </div>
                <div className="stomach"></div>
                <div className="legs">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            <Tail />
        </div>
    );
}

export default Dog;