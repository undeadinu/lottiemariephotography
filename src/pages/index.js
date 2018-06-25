import React from 'react'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import './homepage.css'

const IndexPage = () => (
  <div>
    <div className="featuredImages">
      <div className="featuredImages__image-holder">
        <img src={image1} className="featuredImages__image" />
      </div>
      <div className="featuredImages__image-holder">
        <img src={image2} className="featuredImages__image" />
      </div>
      <div className="featuredImages__image-holder featuredImages__image-holder--span2-mobile">
        <img src={image3} className="featuredImages__image" />
      </div>
    </div>
  </div>
)

export default IndexPage
