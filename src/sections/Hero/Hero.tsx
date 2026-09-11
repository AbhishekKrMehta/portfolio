import './Hero.scss'

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__layout">
                    <div className="hero__content">
                        <p className="hero__eyebrow">Full Stack Developer · Frontend Focus</p>

                        <h1>
                            I build software
                            <br />
                            that works at scale.
                        </h1>

                        <p className="hero__description">
                            Hi! I'm Abhishek, a software engineer with 9+ years of experience building enterprise
                            applications across aviation, banking and energy. My work combines
                            frontend architecture, performance and automated testing with growing
                            expertise in Java and Spring Boot.
                        </p>

                        <p className="hero__technologies">
                            JavaScript <span>·</span> TypeScript <span>·</span> Angular <span>·</span> React
                        </p>
                        <p className="hero__technologies">
                            Java <span>·</span> Spring Boot
                        </p>

                        <div className="hero__actions">
                            <a
                                href="#projects"
                                className="hero__action hero__action--primary"
                            >
                                View my work
                            </a>

                            <a
                                href="#contact"
                                className="hero__action hero__action--secondary"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>

                    <div className="hero__image-wrapper">
                        <img
                            className="hero__image"
                            src="/images/profile.jpeg"
                            alt="profile photo"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero