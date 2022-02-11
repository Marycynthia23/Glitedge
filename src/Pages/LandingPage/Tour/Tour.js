import React from 'react'
import styles from './Tour.module.css'
import Bg from '../../../images/c.png'

const Tour = () => {
    return (
        <div className={styles.TourContainer}>
            <h2>Video of Cherish Estate</h2>
            <div className={styles.TourContent}>
                <img src={Bg} alt=""/>
                <div className={styles.PlayBtn}>
                <i class="fas fa-caret-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Tour
