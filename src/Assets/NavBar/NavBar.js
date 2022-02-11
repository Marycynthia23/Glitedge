import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.png';
const NavBar = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.navBar}>
                    <img src={Logo} alt="logo"/>
                    <ul className={styles.navMenu}>
                    <li className={styles.navItem} >
                        <a href="***"
                        className={styles.navLink}
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        Home
                        </a>
                    </li>
                    <li className={styles.navItem} >
                        <a href="***"
                        className={styles.navLink}
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        Listing
                        </a>
                    </li>
                    <li className={styles.navItem} >
                        <a href="***"
                        className={styles.navLink}
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        AboutUs
                        </a>
                    </li>
                    <li className={styles.navItem} >
                        <a href="***"
                        className={styles.navLink}
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        ContactUs
                        </a>
                    </li>
                    <li className={styles.navItem} >
                        <a href="***"
                        className={styles.navLink}
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        Blog
                        </a>
                    </li>
                    
                </ul>
                <div className={styles.navBtn} >
                        <a href="***"
                        styles={{ textDecoration: "none", color: "#000" }}
                        >
                        Scheduled appointment
                        </a>
                    </div>

                    <div className={styles.hamburger}>
                        <span className={styles.barTop}></span>
                        <span className={styles.barMiddle}></span>
                        <span className={styles.barBottom}></span>
                    </div>
                </nav>
        </header>

        </div>
    )
}

export default NavBar
