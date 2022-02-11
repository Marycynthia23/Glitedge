import React from 'react'
import styles from './ProjectUnderConstr.module.css';
const ProjectUnderConstr = () => {
    const catalogues = [ 
        {
        title: 'Ebeano-Iyke General Shopping Plaza in ...',
        location: 'Sangotedo',
        available: "5 floors",
        link: 'Read More',
        image: '/pubImage/ConstrOne.png'
        },
        
        {
        title: 'Ayo-ola’s Ultra modern car park in lekki ph...',
        location: 'Lekki',
        available: "12 floors",
        link: 'Read More',
        image: '/pubImage/constrTwo.png'

        },

        {
        title: 'Automated  3 bedroom apartment  in ...',
        location: 'Lekki',
        available: "25 rooms",
        link: 'Read More',
        image: '/pubImage/constrThree.png'
        }

    ]



    return (
        <div className={styles.FeaturedHouses}>
            <h2>Project under construction</h2>
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

export default ProjectUnderConstr
