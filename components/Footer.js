import Image from 'next/image'
import Link from 'next/link'

import styles from "@/styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.section}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logoWrapper}>
                    <Image src="/logo.svg" alt="Logo Image" height={32} width={192} />
                </Link>
                <ul className={styles.navMenu}>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Careers</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">Support</Link></li>
                </ul>
                <ul className={styles.socialMenu}>
                    <li><Link href="/"><Image src="/icon-facebook.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-pinterest.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-twitter.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-instagram.svg" alt="Icon" width={20} height={20} /></Link></li>
                </ul>
                <p className={styles.copyright}>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer