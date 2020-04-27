import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './compent/Home'
import VideoStructure from './compent/VideoStructure'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Route exact path ="/"component={Home} />
        <Route path ="/:videoname"component={VideoStructure} />

    </BrowserRouter>
    </div>
  );
}

export default App;
