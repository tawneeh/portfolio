import Sidebar from './Sidebar';
import Home from './../contents/Home';
import About from './../contents/About';
import Skills from './../contents/Skills';
import Resume from './../contents/Resume';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './../App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
        </div>
      </Router>
    </>
  );
}

export default App;