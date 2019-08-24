import React from 'react';
import './App.css';
import Dog from './Dog';
import DogContextProvider from "./DogContext";

// for testing purposes
import Button from './Button';

function App() {
  return (
    <div className="App">
      <DogContextProvider>
        <Button />
        <Dog />
      </DogContextProvider>
    </div>
  );
}

export default App;
