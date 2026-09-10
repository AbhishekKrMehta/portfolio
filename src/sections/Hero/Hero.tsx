import './Hero.scss'

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__layout">
                    <div className="hero__content">
                        <p className="hero__eyebrow">Senior Software Engineer</p>

                        <h1>
                            Building thoughtful,
                            <br />
                            scalable web experiences.
                        </h1>

                        <p className="hero__description">
                            9+ years of professional experience building enterprise
                            applications across energy, banking and aviation, with a strong
                            frontend background and experience across Java and Spring Boot.
                        </p>

                        <p className="hero__technologies">
                            React <span>·</span> TypeScript <span>·</span> Angular
                            <span>·</span> Java <span>·</span> Spring Boot
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