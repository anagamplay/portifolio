import './App.css';
import { useState } from 'react';
import Home from './sections/Home';
import MyExpertise from './sections/MyExpertise';
// import About from './sections/About';
// import Contact from './sections/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div class="header-content">
          <h1 className="logo">Ana Clara Silvestre</h1>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">Sobre mim</a>
            <a href="#contact">Contato</a>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>
      <main className="main">
        <Home />
        <MyExpertise />
        {/* <About />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;