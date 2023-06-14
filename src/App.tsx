import React from 'react';
import {Info} from "./components/Info";
import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Contacts} from "./components/Contacts";

function App() {
  return (
      <div>
        <Info />
          <About />
          <Projects />
          <Contacts />
        <Navigation />
      </div>
  );
}

export default App;
