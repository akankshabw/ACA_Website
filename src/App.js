import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';

import Event from './comp/event';
import Faculty from './comp/Faculty';
import { useEffect } from 'react';
import Footer1 from './comp/Footer1' 
import Projects from './comp/Projects';
function App() {
  useEffect(() => {
    document.title = 'ACA'
}, []);
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Event />
      <Faculty />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Projects/>
       <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer1/>
    </div>
  );
}

export default App;
