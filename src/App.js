import React from 'react';
import './App.css';
import About from './components/About/About';
import Workflow from './components/Workflow/Workflow';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Footer from './Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Stats/>
      <Workflow/>
      <Services/>
      <Projects/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App