import React from 'react'
import Link from 'gatsby-link'
import './navigation.css'

const Navigation = () => (
  <div className="navigation">
    <div className="navigation__icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services/">Services</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/about/">Contact</Link></li>
    </ul>
  </div>
)

export default Navigation
