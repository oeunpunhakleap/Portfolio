import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experince from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Home/>
        <Skills/>
        <Experince/>
      </main>
    </div>
  );
}

export default App
