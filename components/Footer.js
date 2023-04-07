import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo Image" height={32} width={192} />
                </Link>
                <ul>
                    <li><Link href="/"><Image src="/icon-facebook.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-pinterest.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-twitter.svg" alt="Icon" width={20} height={20} /></Link></li>
                    <li><Link href="/"><Image src="/icon-instagram.svg" alt="Icon" width={20} height={20} /></Link></li>
                </ul>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Careers</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">Support</Link></li>
                </ul>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer