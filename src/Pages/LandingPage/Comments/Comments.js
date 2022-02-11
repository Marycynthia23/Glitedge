import React from 'react'
import styles from './Comments.module.css'
import box from '../../../images/commentbox.png';
import comma from '../../../images/comma.png'
import people1 from '../../../images/People1.png'
import people2 from '../../../images/people2.png'

const Comments = () => {
    return (
        <div className={styles.CommentsContainer}>
            <h2>Our Client Speaks</h2>
            <img src={comma} alt="" className={styles.Comma}/>
            <div className={styles.Comments}>
                <div className={styles.TextDisplay}>
                    <div className={styles.TextContainer}>
                        <h3>Incredible Experience</h3>
                        <p className={styles.CommentsText}>
                            Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. 
                            Glitedge was professional and personal. The best real estate company I have ever dealt with. Very professional, experienced and helpful team. Highly recommend
                        </p>
                    </div>
                    <div className={styles.ArrowDown}></div>
                    <div className={styles.people}>
                        <img src={people1} alt=""/>
                        <div className={styles.peopleInfo}>
                            <h6>Jane Cooper</h6>
                            <p>CEO, ABC Cooperation</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.TextContainer}>
                        <h3>Incredible Experience</h3>
                        <p className={styles.CommentsText}>
                            Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. 
                            Glitedge was professional and personal. The best real estate company I have ever dealt with. Very professional, experienced and helpful team. Highly recommend
                        </p>
                    </div>
                    <div className={styles.ArrowDown}></div>
                    <div className={styles.people}>
                        <img src={people1} alt=""/>
                        <div className={styles.peopleInfo}>
                            <h6>Jane Cooper</h6>
                            <p>CEO, ABC Cooperation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
