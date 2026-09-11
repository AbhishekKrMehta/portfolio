import './Contact.scss'

function LinkedInIcon() {
    return (
        <svg
            className="contact__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.65-5.5a4 4 0 0 0-3.6 2v-1.85H9.25V21h3.5v-6.2c0-1.65.3-3.25 2.35-3.25 2 0 2.05 1.9 2.05 3.35V21H21v-7.15Z"
                fill="currentColor"
            />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg
            className="contact__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.78c-2.65.58-3.21-1.12-3.21-1.12-.44-1.1-1.08-1.39-1.08-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.26 1.05 2.81.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.67-2.23 4.48-4.36 4.72.35.3.66.87.66 1.76v2.61c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"
                fill="currentColor"
            />
        </svg>
    )
}

function DocumentIcon() {
    return (
        <svg
            className="contact__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.8L17.2 8H14V4.8ZM6 4h6v5h6v11H6V4Zm2 9v2h8v-2H8Zm0 4v2h8v-2H8Z"
                fill="currentColor"
            />
        </svg>
    )
}

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <p className="contact__eyebrow">Contact</p>

                    <h2>Let's build something useful.</h2>

                    <p className="contact__description">
                        I'm open to discussing software engineering
                        opportunities, interesting projects, and
                        collaborations.
                    </p>

                    <a
                        className="contact__email"
                        href="mailto:abhishekmehta679@gmail.com"
                    >
                        abhishekmehta679@gmail.com
                    </a>

                    <div className="contact__links">
                        <a
                            href="https://www.linkedin.com/in/abhishekkumarmehta"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open LinkedIn profile"
                        >
                            <LinkedInIcon />
                            LinkedIn ↗
                        </a>

                        <a
                            href="https://github.com/AbhishekKrMehta"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open GitHub profile"
                        >
                            <GitHubIcon />
                            GitHub ↗
                        </a>

                        <a
                            href="/documents/Abhishek-Kumar-Mehta-CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open CV"
                        >
                            <DocumentIcon />
                            CV ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact