import React from 'react';
import './App.css';
import Dog from './Dog';
import DogContextProvider from "./DogContext";
<<<<<<< HEAD
import NoiseTrigger from "./NoiseTrigger";
=======
import Bone from './Bone';
import Bone2 from './Bone2';

>>>>>>> 19f9624aa826aa48e03f8036159f14cdcedd0669
// for testing purposes
import Button from './Button';
import WebSiteChecker from './WebSiteChecker';
function App() {
  return (
    <div className="App">
      <DogContextProvider>
        <Button />
        <NoiseTrigger></NoiseTrigger>
        <WebSiteChecker/>
        <Dog />
        <Bone2 />
        <Bone />
      </DogContextProvider>
    </div>
  );
}

export default App;
