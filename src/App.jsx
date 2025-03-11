import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
//import { TryWellbeing } from './pages/TryWellbeing';


function App() 
{
  return 
  (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
