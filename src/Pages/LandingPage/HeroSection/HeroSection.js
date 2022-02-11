import React from 'react'
import styles from './HeroSection.module.css';
import Bg from '../../../images/bg.png';

function HeroSection() {
    return (
        <div className={styles.HeroSection}>
            <img src={Bg} alt="background"/>
            <div className={styles.HeroText}>
                <h1>Let us guide you Home</h1>
                <p>Client Focused| Result Driven</p>
                <div className={styles.PlayBtn}>
                <i class="fas fa-caret-right"></i>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
