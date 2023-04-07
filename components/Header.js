import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <Link href="/">
                <Image src="/logo.svg" alt="Logo Image" height={32} width={192} />
            </Link>
            <button className="nav-toggler"></button>
            <ul>
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