import Image from "next/image"

import styles from "@/styles/FeaturedHero.module.css"

const FeaturedHero = () => {
    return (
        <section className={styles.section}>
            <picture className={styles.imagebox}>
                <source media="(min-width: 650px)" alt="Hero Image" srcSet="/desktop/image-interactive.jpg" />
                <Image priority src="/mobile/image-interactive.jpg" alt="Hero Image" width={654} height={448} />
            </picture>
            <div className={styles.textbox}>
                <h2 className={styles.title}>The leader in interactive VR</h2>
                <p className={styles.desc}>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </section>
    )
}

export default FeaturedHero