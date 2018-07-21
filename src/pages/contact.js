import React from 'react'

import styles from './styles/contact.module.scss'

const ContactPage = () => (
    <div>
        <div className="container">
            <h1 className="text--center siteTitle">Contact</h1>
            <p className="text--center">Fill out the form below and I will get back to you as quickly as possible.</p>
            <form className={styles.formHolder} method="POST" action="https://www.enformed.io/krf46brt">
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input name="name" className={styles.formControl} type="text" placeholder="Name"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input name="email" className={styles.formControl} type="text" placeholder="Email address"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Phone Number:</label>
                    <input name="contact_number" className={styles.formControl} type="text" placeholder="Phone number"/>
                </div>
                <div className={styles.formGroup}>
                    <p>Contact Preference:</p>
                    <div className={styles.radioGroup}>
                        <label className={styles.customCheckBox}>Email
                            <input name="contact_preference" value="email" type="radio"/>
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.customCheckBox}>Phone
                            <input name="contact_preference" value="phone" type="radio"/>
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.customCheckBox}>Any
                            <input name="contact_preference" value="any" type="radio" checked/>
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                </div>
                <div className={`${styles.formGroup} ${styles.wideGroup}`}>
                    <label>Message</label>
                    <textarea name="message" className={styles.formControlTextArea} rows="4" cols="50"></textarea>
                </div>
                <div className={styles.formGroup}>
                    <button type="submit"className={styles.submitButton}>Submit</button>
                </div>
            </form>
        </div>
    </div>
)

export default ContactPage
