import React from 'react'
import styles from './header.module.scss'
import Navigation from '../navigation/navigation';

const Header = () => (
  <header>
    <div className="container">
      <Navigation />
    </div>
  </header>
)

export default Header
