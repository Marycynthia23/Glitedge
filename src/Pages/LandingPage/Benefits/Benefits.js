import React from 'react'
import styles from './Benefits.module.css';
import Icon1 from '../../../images/icon1.png';
import Icon2 from '../../../images/icon2.png';
import Comments from '../Comments/Comments';

const Benefits = () => {
    return (
        <div className={styles.BenefitsContainer}>
            <h2>Benefits of Working with us</h2>
            <div className={styles.BenefitsList}>
                <div className={styles.Left}>
                    <li className={styles.LeftList}>
                        <img src={Icon1} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Client Focused</h4>
                            <p>We work as close as possible with you our clients to achieve the best results.</p>
                        </div>
                    </li>
                    <li className={styles.LeftList}>
                        <img src={Icon2} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Stressfree Inspections</h4>
                            <p>We love showing homes. We would pick you up on your prefferd day ang give you a fun home inspection.</p>
                        </div>
                    </li>
                </div>
                <div className={styles.Right}>
                    <li className={styles.LeftList}>
                        <img src={Icon1} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>We are experts</h4>
                            <p>Our team of experts maintain constant flawless communication which ensures high level of reliability.</p>
                        </div>
                    </li>
                    <li className={styles.LeftList}>
                        <img src={Icon2} alt="icons" className={styles.LeftIcons}/>
                        <div className={styles.LeftText}>
                            <h4>Quality and modern buildings.</h4>
                            <p>Our core competencies include high-quality off-plan development. We build modern and smart homes.</p>
                        </div>
                    </li>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Benefits
