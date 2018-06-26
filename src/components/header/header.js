import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import Navigation from '../navigation/navigation';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <p className="h1 text--center"><Link to="/">{siteTitle}</Link></p>
    <Navigation />
  </header>
)

export default Header
