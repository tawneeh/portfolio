import Sidebar from './Sidebar';
import Home from './../contents/Home';
import About from './../contents/About';
import Education from './../contents/Education';
import Skills from './../contents/Skills';
import Link from './Link';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './../App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Sidebar />
          <Link />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
        </div>
      </Router>
    </>
  );
}

export default App;