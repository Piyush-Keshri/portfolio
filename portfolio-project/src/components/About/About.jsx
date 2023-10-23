import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const About = () => {
    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt='about-image' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I have experience in builind</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in builind</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About