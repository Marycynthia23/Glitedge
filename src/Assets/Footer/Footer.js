import React from 'react'
import styles from './Footer.module.css';
import logo from '../../images/footerLogo.png'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div>
                <img src={logo} alt="logo"/>
                <p>Copyright © 2020 Landify UI Kit.
                All rights reserved.
                </p>
                <div className={styles.MediaIcons}>
                    <span><i class="fab fa-instagram"></i></span>
                    <span><i class="fab fa-dribbble"></i></span>
                    <span><i class="fab fa-twitter"></i></span>
                    <span><i class="fab fa-youtube"></i></span>

                </div>
            </div>
            <div>
                <h6>Company</h6>
                <li>AboutUs</li>
                <li>ContactUs</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Testimonals</li>

            </div>
            <div>
                <h6>Support</h6>
                <li>Help Center</li>
                <li>Term of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>

            </div>
            <div>
                <h6>Stay up to date</h6>
                <div className={styles.EmailOutline}>
                    <input type="email" id="email" placeholder="your email address"/>
                    <i class="fas fa-location-arrow"></i>
                </div>
            </div>

        </div>
    )
}

export default Footer
