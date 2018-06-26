import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <p className="h1 text--center"><Link to="/">{siteTitle}</Link></p>
  </header>
)

export default Header
