import React from 'react'
import styles from './styles/services.module.scss'

const ServicesPage = () => (
  <div>
    <h1 className="text--center">Services</h1>
    <h2 className="text--center">Wedding packages</h2>
    <div className={styles.packages}>
      <div className={styles.packages__item}>
        <div className={styles["packages__item-header"]}>
          <p className="text--center">Ruby</p>
        </div>
        <div className={styles["packages__item-price"]}>
          <p className="text--center">£550</p>
        </div>
        <div className={styles["packages__item-details"]}>
          <ul>
            <li>Meet and greet event</li>
            <li>USB with edited pictures</li>
            <li>Half day</li>
          </ul>
        </div>
      </div>
      <div className={styles.packages__item}>
        <div className={styles["packages__item-header"]}>
          <p className="text--center">Diamond</p>
        </div>
        <div className={styles["packages__item-price"]}>
          <p className="text--center">£550</p>
        </div>
        <div className={styles["packages__item-details"]}>
          <ul>
            <li>Meet and greet event</li>
            <li>USB with edited pictures</li>
            <li>Full day</li>
            <li>Custom album</li>
          </ul>
        </div>
      </div>
      <div className={styles.packages__item}>
        <div className={styles["packages__item-header"]}>
          <p className="text--center">Sapphire</p>
        </div>
        <div className={styles["packages__item-price"]}>
          <p className="text--center">£550</p>
        </div>
        <div className={styles["packages__item-details"]}>
          <ul>
            <li>Meet and greet event</li>
            <li>USB with edited pictures</li>
            <li>Half day</li>
          </ul>
        </div>
      </div>
    </div>
    <h1 className="text--center">Other services</h1>
  </div>
)

export default ServicesPage
