import React from 'react';
import './App.css';
import Dog from './Dog';
import DogContextProvider from "./DogContext";
import NoiseTrigger from "./NoiseTrigger";
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
      </DogContextProvider>
    </div>
  );
}

export default App;
