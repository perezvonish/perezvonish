import React from 'react';
import {Welcome} from "./components/Welcome";
import {Navigation} from "./components/Navigation";
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
        <Navigation />
      </div>
  );
}

export default App;
