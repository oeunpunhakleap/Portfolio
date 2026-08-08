import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experince from './components/Experience';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Home/>
        <About/>
        <Experince/>
      </main>
    </div>
  );
}

export default App