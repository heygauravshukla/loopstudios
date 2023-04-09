import Image from "next/image"
import Link from "next/link"

import styles from "@/styles/Showcase.module.css"

const creationsCards = [
    {
        id: 1,
        cardTitle: "Deep earth",
        imageURLMobile: "/mobile/image-deep-earth.jpg",
        imageURLDesktop: "/desktop/image-deep-earth.jpg",
        destinationURL: "/",
    },
    {
        id: 2,
        cardTitle: "Night arcade",
        imageURLMobile: "/mobile/image-night-arcade.jpg",
        imageURLDesktop: "/desktop/image-night-arcade.jpg",
        destinationURL: "/",
    },
    {
        id: 3,
        cardTitle: "Soccer team VR",
        imageURLMobile: "/mobile/image-soccer-team.jpg",
        imageURLDesktop: "/desktop/image-soccer-team.jpg",
        destinationURL: "/",
    },
    {
        id: 4,
        cardTitle: "The grid",
        imageURLMobile: "/mobile/image-grid.jpg",
        imageURLDesktop: "/desktop/image-grid.jpg",
        destinationURL: "/",
    },
    {
        id: 5,
        cardTitle: "From up above VR",
        imageURLMobile: "/mobile/image-from-above.jpg",
        imageURLDesktop: "/desktop/image-from-above.jpg",
        destinationURL: "/",
    },
    {
        id: 6,
        cardTitle: "Pocket borealis",
        imageURLMobile: "/mobile/image-pocket-borealis.jpg",
        imageURLDesktop: "/desktop/image-pocket-borealis.jpg",
        destinationURL: "/",
    },
    {
        id: 7,
        cardTitle: "The curiosity",
        imageURLMobile: "/mobile/image-curiosity.jpg",
        imageURLDesktop: "/desktop/image-curiosity.jpg",
        destinationURL: "/",
    },
    {
        id: 8,
        cardTitle: "Make it fisheye",
        imageURLMobile: "/mobile/image-fisheye.jpg",
        imageURLDesktop: "/desktop/image-fisheye.jpg",
        destinationURL: "/",
    },
]

const Showcase = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Our creations</h3>
            <div className={styles.cardWrapper}>
                {
                    creationsCards.map((creationsCard) => (
                        <Link href={creationsCard.destinationURL} key={creationsCard.id} className={styles.card}>
                            <picture>
                                <source media="(min-width: 650px)" srcSet={creationsCard.imageURLDesktop} alt={creationsCard.cardTitle} />
                                <Image src={creationsCard.imageURLMobile} alt={creationsCard.cardTitle} width={654} height={240} priority />
                            </picture>
                            <span className={styles.cardTitle}>{creationsCard.cardTitle}</span>
                        </Link>
                    ))
                }
            </div>
            <button className={styles.button}>See all</button>
        </section>
    )
}

export default Showcase