import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/caronae-logo.png';
import hamburgerBtn from '../../assets/fi_menu.png';

export default function Navbar() {
  const [toggleList, setToggleList] = useState(false);
  const screenSize = window.screen.width;

  return (
    <>
    {screenSize > 1100 ?
      <div className="container-navbar">
        <img src={logo} />
        <div className="navbar-menu">
          <div className="navbar-item">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/about"
            >
              Conheça o projeto
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/history"
            >
              Histórico
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/app"
            >
              Aplicativo
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/faq"
            >
              FAQ
            </Link>
          </div>
        </div>
        <button className="navbar-dl-button">Baixe o app</button>
      </div>
      :
      <div className="container-navbar">
        <img src={logo} className="navbar-logo" />
        <img src={hamburgerBtn} className="navbar-hamb-btn" onClick={() => setToggleList(!toggleList)} />
      </div>
    }
    {toggleList &&
      <div className="toggle-menu-container">
        <div className="navbar-item-toggle">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="navbar-item-toggle">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/about"
          >
            Conheça o projeto
          </Link>
        </div>
        <div className="navbar-item-toggle">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/history"
          >
            Histórico
          </Link>
        </div>
        <div className="navbar-item-toggle">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/app"
          >
            Aplicativo
          </Link>
        </div>
        <div className="navbar-item-toggle">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/faq"
          >
            FAQ
          </Link>
        </div>
        <button className="navbar-dl-button-toggle">Baixe o app</button>
      </div>
    }
    </>
  );
}
