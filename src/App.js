import React from "react";

import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Resume />
    </div>
  );
}

export default App;
