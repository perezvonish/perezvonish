import React from 'react';
import {Info} from "./components/Info";
import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";
import "./styles/index.css"

function App() {
  return (
      <div className="app-container">
        <Info />
        <About />
        <Contacts />
        <Navigation />
      </div>
  );
}

export default App;
