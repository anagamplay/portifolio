import "./App.css";
import { useState } from "react";
import Home from "./sections/Home";
import MyExpertise from "./sections/MyExpertise";
import MyWork from "./sections/MyWork";
import Footer from "./components/Footer";
import AboutMe from "./sections/AboutMe";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">Ana Clara Silvestre</h1>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <button className="close-menu" onClick={closeMenu}>
              ✖
            </button>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              Sobre mim
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contato
            </a>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <main className="main">
        <Home />
        <MyExpertise />
        <AboutMe />
        <MyWork />
      </main>

      <Footer />
    </div>
  );
}

export default App;
