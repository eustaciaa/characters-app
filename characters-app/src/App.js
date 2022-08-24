import logo from './logo.svg';

import React from "react";
import './App.css';
import Navbar from './Navbar';
import All from './pages/All';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import { Route, Routes } from "react-router-dom"

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <Navbar />
      <div class="container">
        <Routes>
          <Route path="/" element={<All />}/>
          <Route path="/all" element={<All />}/>
          <Route path="/by-locations" element={<Locations />}/>
          <Route path="/by-episodes" element={<Episodes />}/>
        </Routes>
      </div>
    </div>    
  )
}
export default App;