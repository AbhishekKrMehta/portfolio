import './Contact.scss'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <p className="contact__eyebrow">Contact</p>

                    <h2>Let's build something useful.</h2>

                    <p className="contact__description">
                        I'm open to discussing software engineering opportunities,
                        interesting projects, and collaborations.
                    </p>

                    <a
                        className="contact__email"
                        href="mailto:abhishekmehta679@gmail.com"
                    >
                        abhishekmehta679@gmail.com
                    </a>

                    <div className="contact__links">
                        <a href="https://www.linkedin.com/in/abhishekkumarmehta" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>

                        <a href="https://github.com/AbhishekKrMehta" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact