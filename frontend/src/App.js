import React from 'react';
import './App.css';
import Dog from './Dog';
import DogContextProvider from "./DogContext";
import Bone from './Bone';
import Bone2 from './Bone2';

// for testing purposes
import Button from './Button';
import WebSiteChecker from './WebSiteChecker';
import HeartRatings from './HeartRating';
function App() {
  return (
    <div className="App">
      <DogContextProvider>
        <HeartRatings />
        <Button />
        <WebSiteChecker />
        <Dog />
        <Bone2 />
        <Bone />
      </DogContextProvider>
    </div>
  );
}

export default App;
