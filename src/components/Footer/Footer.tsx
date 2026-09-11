import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p>
                    Designed and developed by{' '}
                    <a
                        className="footer__name"
                        href="https://www.linkedin.com/in/abhishekkumarmehta"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Abhishek
                    </a>{' '}
                    using React
                </p>

                <a href="#">Back to top ↑</a>
            </div>
        </footer>
    )
}

export default Footer