import Image from "next/image"

const FeaturedHero = () => {
    return (
        <section>
            <picture>
                <source media="(min-width: 650px)" alt="Hero Image" srcSet="/desktop/image-hero.jpg" />
                <Image priority className="w-full" src="/mobile/image-hero.jpg" alt="Hero Image" width={750} height={1300} />
            </picture>
            <div>
                <h2>The leader in interactive VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </section>
    )
}

export default FeaturedHero