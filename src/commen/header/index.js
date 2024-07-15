import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { more } from '../../assets/images/png';
import Sidebar from './sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-div">
            <Link to={"/"}>
              <h2>Dyad</h2>
            </Link>
            <div className="header-div-list">
              <a href="/about" data-replace="About"><span>About</span></a>
              <a href="/blog" data-replace="Blog"><span>Blog</span></a>
              <a href="/contact" data-replace="Contact"><span>Contact</span></a>
            </div>
            <div className="header-menu" onClick={toggleSidebar}>
              <img src={more} alt="more" />
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
}
