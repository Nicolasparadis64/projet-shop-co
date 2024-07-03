// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './composants/Nav';  // Corrigez le nom du composant importé
import Header1 from './composants/Header1';
import FooterHeader from './composants/FooterHeader';
import Body1 from './composants/Body1';
import Body2 from './composants/Body2';
import Body3 from './composants/Body3';
import Body4 from './composants/Body4';
import Footer from './composants/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './composants/Notfound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />  {/* Utilisez le composant comme un élément JSX */}
        <Routes>
          <Route path="/" element={<Acceuil />} >Acceuil</Route>
          <Route path='/about' element={<About/>}>A propos</Route>
          <Route path='/contact' element={<Contact/>}>Contact</Route>
          <Route path='*' element={<Notfound/>}>Error</Route>
        </Routes>
      <Header1 />
      <FooterHeader />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
