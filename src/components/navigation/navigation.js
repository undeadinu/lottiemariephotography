import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

class Navigation extends React.Component {

  constructor() {
    super();
    this.state = { navigation: false }
  }

  render() {
    return (
      <div className={!this.state.navigation ? styles.navigation : [styles.navigation, styles['navigation--active']].join(' ')}>
        <div onClick={() => this.setState({ navigation: !this.state.navigation })} className={styles.navigation__icon}>
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
  }
}

export default Navigation
