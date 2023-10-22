import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react';
import { getImageUrl } from '../../utils';


const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>

            <div className={styles.menu}>

                <img className='menuBtn' src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt='menu-btn' onClick={() => { setmenuOpen(!menuOpen) }} />

                <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} onClick={() => { setmenuOpen(false) }}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#expirence'>Experience</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>

                </ul>
            </div>

        </nav>);
}

export default Navbar;