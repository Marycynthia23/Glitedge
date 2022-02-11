import React from 'react'
import styles from './Services.module.css'
import Picture from '../../../images/servpix.png'
import Icon1 from '../../../images/icon1.png'
import Icon2 from '../../../images/icon2.png'

function Services() {
    return (
        <div className={styles.ServiceContainer}>
            <h2>Our Services</h2>
            <div className={styles.Services}>
                <div className={styles.Left}>
                    <li className={styles.LeftList}>
                        <img src={Icon1} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Residential Development</h4>
                            <p>We build, develop and renovate residential homes. 
                                We provide high-quality services & innovative solutions.</p>
                        </div>
                    </li>
                    <li className={styles.LeftList}>
                    <img src={Icon2} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Commercial Development</h4>
                            <p>We provide quality construction and development of commercial buildings.</p>
                        </div>
                    </li>
                    <li className={styles.LeftList}>
                    <img src={Icon2} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Sales Of Real Estate</h4>
                            <p>We have extensive experience in development of land and existing buildings,
                                 from inception to completion.</p>
                        </div>
                    </li>
                </div>
                <div className={styles.Right}>
                    <img src={Picture} alt="threepix"/>
                </div>
            </div>
        </div>
    )
}

export default Services
