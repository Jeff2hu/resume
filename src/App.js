import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Project from "./pages/Project";
import './style/style.css';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path='resume' element={<About />}/>
        <Route path='contact' element={<Contact />} />
        <Route path='experience' element={<Experience />} />
        <Route path='project' element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
