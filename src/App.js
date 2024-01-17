import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';
import About from './comp/About';
import Event from './comp/event';
import Faculty from './comp/Faculty';
import { useEffect } from 'react';
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
    </div>
  );
}

export default App;
