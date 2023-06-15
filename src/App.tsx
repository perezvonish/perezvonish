import React from 'react';
import {Welcome} from "./components/Welcome";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";
import "./styles/index.css"
import {Skills} from "./components/Skills";

function App() {
  return (
      <div className="app-container">
        <Welcome />
        <About />
        <Skills />
        <Contacts />
      </div>
  );
}

export default App;
