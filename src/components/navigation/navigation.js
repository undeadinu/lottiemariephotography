import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.scss'

class Navigation extends React.Component {

  constructor() {
    super();
    this.state = { navigation: false }
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigation: !this.state.navigation });
  }

  render() {
    return (
      <div className={!this.state.navigation ? styles.navigation : [styles.navigation, styles['navigation--active']].join(' ')}>
        <div onClick={this.toggleNavigation} className={styles.navigation__icon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
              <li><Link onClick={this.toggleNavigation} to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
