import React from 'react'
import styles from './Form.module.css'
import FormPic from '../../../images/formpic.png'

const Form = () => {
    return (
      <div className={styles.FormContainer}>
        <h3 className={styles.FormHeading}>We would love to hear from you</h3>
        <div className={styles.Form}>
        <form >
                <div className={styles.colTwo}>
                <div className={styles.FormGroup}>
                  <label for="">Firstname </label>
                  <input
                                  type="text"
                                  id="fname"
                                  className={styles.fname}
                                  name="firstname"
                                  
                                />
                </div>
                <div className={styles.FormGroup}>
                  <label for="">Lastname</label>
                  <input
                    type="text"
                    id="lname"
                    className={styles.lname}
                    name="lastname"
                    
                    
                  />
                </div>
              
                </div>

                <div className={styles.FormGroup}>
                  <label for="">Email</label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  
                />
                </div>
              
                <br />

                <textarea id="msg" name="message" rows="4" cols="50">
                  
                </textarea>
                <input type="submit" value="Submit" />
                
              </form>
              <div className={styles.FormImg}>
          <img src={FormPic} alt=""/>
          </div>

        </div>
      </div>
    )
}

export default Form
