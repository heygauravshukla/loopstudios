import Image from "next/image"

const creationsCards = [
    {
        id: 1,
        cardTitle: "Deep earth",
        imageURLMobile: "/mobile/image-deep-earth.jpg",
        imageURLDesktop: "/desktop/image-deep-earth.jpg",
    },
    {
        id: 2,
        cardTitle: "Night arcade",
        imageURLMobile: "/mobile/image-night-arcade.jpg",
        imageURLDesktop: "/desktop/image-night-arcade.jpg",
    },
    {
        id: 3,
        cardTitle: "Soccer team VR",
        imageURLMobile: "/mobile/image-soccer-team.jpg",
        imageURLDesktop: "/desktop/image-soccer-team.jpg",
    },
    {
        id: 4,
        cardTitle: "The grid",
        imageURLMobile: "/mobile/image-grid.jpg",
        imageURLDesktop: "/desktop/image-grid.jpg",
    },
    {
        id: 5,
        cardTitle: "From up above VR",
        imageURLMobile: "/mobile/image-from-above.jpg",
        imageURLDesktop: "/desktop/image-from-above.jpg",
    },
    {
        id: 6,
        cardTitle: "Pocket borealis",
        imageURLMobile: "/mobile/image-pocket-borealis.jpg",
        imageURLDesktop: "/desktop/image-pocket-borealis.jpg",
    },
    {
        id: 7,
        cardTitle: "The curiosity",
        imageURLMobile: "/mobile/image-curiosity.jpg",
        imageURLDesktop: "/desktop/image-curiosity.jpg",
    },
    {
        id: 8,
        cardTitle: "Make it fisheye",
        imageURLMobile: "/mobile/image-fisheye.jpg",
        imageURLDesktop: "/desktop/image-fisheye.jpg",
    },
]

const Showcase = () => {
    return (
        <section className="wrapper">
            <h3>Our creations</h3>
            <button>See all</button>
            <div>
                {
                    creationsCards.map((creationsCard) => (
                        <div key={creationsCard.id}>
                            <picture>
                                <source media="(min-width: 650px)" srcSet={creationsCard.imageURLDesktop} alt={creationsCard.cardTitle} />
                                <Image className="w-full" src={creationsCard.imageURLMobile} alt={creationsCard.cardTitle} width={654} height={240} priority />
                            </picture>
                            <span>{creationsCard.cardTitle}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Showcase