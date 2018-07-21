import React from 'react'
import Link from 'gatsby-link';

import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import styles from './styles/homepage.module.scss'


const IndexPage = ({ siteTitle }) => (
  <div className="container">
    <h1 className="text--center siteTitle"><Link to="/">Lottie Marie Photography</Link></h1>
    <div className={styles.featuredImages}>
      <div className={styles['featuredImages__image-holder']}>
        <img src={image1} className={styles.featuredImages__image} />
      </div>
      <div className={styles['featuredImages__image-holder']}>
        <img src={image2} className={styles.featuredImages__image} />
      </div>
      <div className={[styles['featuredImages__image-holder'], styles['featuredImages__image-holder--span2-mobile']].join(' ')}>
        <img src={image3} className={styles.featuredImages__image} />
      </div>
    </div>
  </div>
)

export default IndexPage
