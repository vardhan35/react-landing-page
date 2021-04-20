import React from 'react'
import styles from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.li}>
                <Link to='/buyproduct'>Buy Product</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
