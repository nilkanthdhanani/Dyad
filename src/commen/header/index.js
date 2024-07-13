import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
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
          </div>
        </div>
      </header>
    </>
  )
}
