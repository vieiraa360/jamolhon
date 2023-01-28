import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import VFX from './VFX';
import Design from './Design';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/vfx" component={VFX} />
        <Route path="/design" component={Design} />
      </div>
    </Router>
  );
}

export default App;