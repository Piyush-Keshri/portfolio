import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'
import React from 'react'

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contacts</h2>
                <p>Feel Free to reach out!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon' />
                    <a href='mailto:piyushkeshri383@gmail.com'>My Mail</a>
                </li>
                <li className={styles.link}>

                    <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin Icon' />
                    <a href='https://www.linkedin.com/in/piyush383/'>Linkedin</a>

                </li>
                <li className={styles.link}>

                    <img src={getImageUrl('contact/githubIcon.png')} alt='Github Icon' />
                    <a href='https://www.github.com/Piyush-Keshri'>Github</a>

                </li>
            </ul>

        </footer>
    )
}

export default Contact