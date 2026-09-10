import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p>© {new Date().getFullYear()} Abhishek Kumar Mehta</p>

                <a href="#">Back to top ↑</a>
            </div>
        </footer>
    )
}

export default Footer 