import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/styles/Header.module.css"

const Header = () => {

    const [isNavExpanded, setisNavExpanded] = useState(false)

    const toggleMenu = () => {
        setisNavExpanded(!isNavExpanded)
    }

    return (
        <header className={styles.header} data-header-active={isNavExpanded ? "true" : "false"}>
            <Link href="/" className={styles.logoWrapper}>
                <Image src="/logo.svg" alt="Logo Image" height={32} width={192} />
            </Link>
            <button onClick={toggleMenu} className={styles.navToggler} data-nav-toggler-active={isNavExpanded ? "true" : "false"}></button>
            <ul className={styles.navigationMenu} data-nav-menu-active={isNavExpanded ? "true" : "false"}>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Careers</Link></li>
                <li><Link href="/">Events</Link></li>
                <li><Link href="/">Products</Link></li>
                <li><Link href="/">Support</Link></li>
            </ul>
        </header>
    )
}

export default Header