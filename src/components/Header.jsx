import React from 'react'

export default function Header() {
  return (
    <header className="header">
    <div className="container header-content">
      <div className="logo-container">
        <h1 className="logo">LOGO</h1>
      </div>
      <nav className="main-nav" aria-label="Main Navigation">
        <ul>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="user-nav">
        <button className="icon-button" aria-label="Search">
          <span className="icon-placeholder">🔍</span>
        </button>
        <button className="icon-button" aria-label="Favorites">
          <span className="icon-placeholder">❤️</span>
        </button>
        <button className="icon-button" aria-label="Profile">
          <span className="icon-placeholder">👤</span>
        </button>
        <button className="icon-button" aria-label="Cart">
          <span className="icon-placeholder">🛒</span>
        </button>
        <div className="language-selector">
          ENG
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
    </div>
    
  </header>
  )
}
