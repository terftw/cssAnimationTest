import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CameraView } from './components/CameraView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CameraView />
      </header>
    </div>
  );
}

export default App;
