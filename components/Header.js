import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    const [isNavExpanded, setisNavExpanded] = useState(false)

    const toggleMenu = () => {
        setisNavExpanded(!isNavExpanded)
    }

    return (
        <header className={`${isNavExpanded ? "fixed inset-x-4" : "static"} flex justify-between items-center z-30`}>
            <Link href="/" className='z-30'>
                <Image className='max-h-[1.5rem] w-auto' src="/logo.svg" alt="Logo Image" height={32} width={192} />
            </Link>
            <button onClick={toggleMenu} className={`${isNavExpanded ? "bg-[url('/icon-close.svg')]" : "bg-[url('/icon-hamburger.svg')]"} w-[1rem] h-[1rem] bg-no-repeat bg-contain bg-center z-30`}></button>
            <ul className={`${isNavExpanded ? "translate-x-0" : "translate-x-full"} fixed inset-0 px-4 bg-black min-h-screen uppercase font-light flex flex-col justify-center gap-2 text-2xl text-gray-300 transition-all z-20`}>
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