import React from 'react';
 
import './App.css';
import { NavBar } from './components/NavBar';
import Part1 from './components/Part1';
import Part2 from './components/Part2';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Part1 />
       <Part2 />
    </div>
  );
}

export default App;
