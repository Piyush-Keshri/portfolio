import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Piyush</h1>
                <p className={styles.description}> I am a Fresher Web Developer with hands on Experience in NodeJs and React.
                    Reach out to me to learn more.
                </p>
                <a href='mailto:piyushkeshri383@gmail.com' className={styles.contactBtn}>Contact Me!</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt='Hero Image' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero