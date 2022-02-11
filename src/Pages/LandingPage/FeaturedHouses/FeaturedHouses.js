import React from 'react'
import styles from './FeaturedHouses.module.css';
// import picA from '../../../images/a.png';
// import picB from '../../../images/b.png';
// import picC from '../../../images/c.png'

function FeaturedHouses() {
    const catalogues = [ 
        {
        title: 'Stylish four bedroom apartment  in ...',
        location: 'Lekki',
        available: "4",
        link: 'Read More',
        image: '/pubImage/a.png'
        },
        
        {
        title: 'Furnished 2 storey duplex apartment  in ...',
        location: 'Lekki',
        available: "3",
        link: 'Read More',
        image: '/pubImage/b.png'

        },

        {
        title: 'Well furnished 3 bedroom apartment  in ...',
        location: 'Lekki',
        available: "5",
        link: 'Read More',
        image: '/pubImage/c.png'
        }

    ]



    return (
        <div className={styles.FeaturedHouses}>
            <h2>Featured Houses</h2>
            <div className={styles.CardDisplay}>
            {catalogues.map(catalogue => (
                 <div className={styles.Cards}>
                 <img src={catalogue.image} alt="Avatar"/>
                 <div className={styles.cardContainer}>
                     <h4><b>{catalogue.title}</b></h4> 
                     <p>{catalogue.location}</p> 
                     <div className={styles.cardBottom}>
                         <span><i class="fas fa-bed"></i> {catalogue.available}</span>
                         <a className={styles.Links}href="***">{catalogue.link}</a>
                     </div>
                 </div>
                 </div>
            )
               
            )}
            </div>
        </div>
    )
}

export default FeaturedHouses
