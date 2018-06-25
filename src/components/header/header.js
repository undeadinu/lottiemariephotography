import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <p className="h1 text--center"><Link to="/">{siteTitle}</Link></p>
  </header>
)

export default Header
