import React from 'react'
import styles from './home.module.css'

const Features = () => {
    return (
        <>
            <h1 className={styles.feats_title}>Our Features</h1>
        <div className={styles.features}>
            <div className={styles.feature}>
                <h2 className={styles.feat_title}>Long and Strong Hairs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat architecto laudantium excepturi odio ut consequatur corporis maiores dolor quidem!</p>
            </div>
            <div className={styles.feature}>
                <h2 className={styles.feat_title}>No Need of conditioner</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat architecto laudantium excepturi odio ut consequatur corporis maiores dolor quidem!</p>
            </div>
            <div className={styles.feature}>
                <h2 className={styles.feat_title}>No Harmfull chemicles</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat architecto laudantium excepturi odio ut consequatur corporis maiores dolor quidem!</p>
            </div>
        </div>
        </>
    )
}

export default Features
