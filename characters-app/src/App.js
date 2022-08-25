import React from "react";
import './App.css';
import Navbar from './Navbar';
import Locations from './pages/Locations';
import { Route, Routes } from "react-router-dom"
import Character from './pages/Character';
import Characters from './pages/Characters';

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
      <div class="container py-5">
        <Routes>
          <Route path="/" element={<Characters />}/>
          <Route path="/character" element={<Characters />}/>
          <Route path="/location" element={<Locations />}/>
          <Route path="/character/:id" render={(props) => <Character id={props.match.params.id} {...props} /> } element={<Character/>}/>
        </Routes>
      </div>
    </div>    
  )
}
export default App;
