import React from 'react'
import styles from './home.module.css'
import {Link } from 'react-router-dom'
import Features from './Features'
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.container_title}>Curls Shampoo</h1>
                    <img src="./image/shampoo.jpg" alt=""/>
                </div>
                <div className={styles.button}>
                <Link to='/buyproduct'><button>Buy Product</button></Link>
                </div>
                <Features/>
            </div>
        </div>
    )
}

export default Home
