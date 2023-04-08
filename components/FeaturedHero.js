import Image from "next/image"

const FeaturedHero = () => {
    return (
        <section className="wrapper py-12 grid gap-10">
            <picture>
                <source media="(min-width: 650px)" alt="Hero Image" srcSet="/desktop/image-interactive.jpg" />
                <Image priority className="w-full" src="/mobile/image-interactive.jpg" alt="Hero Image" width={654} height={448} />
            </picture>
            <div className="grid gap-4">
                <h2 className="text-3xl uppercase font-secondary font-light text-center">The leader in interactive VR</h2>
                <p className="text-center font-primary text-gray-500">Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </section>
    )
}

export default FeaturedHero