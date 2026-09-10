import './Header.scss'
import Navigation from '../Navigation/Navigation'

type HeaderProps = {
    name: string
}

function Header({ name }: HeaderProps) {
    return (
        <header className="header">
            <div className="container header__inner">
                <a className="header__brand" href="/" aria-label={`${name} - Home`}>
                    {name}
                </a>

                <Navigation />
            </div>
        </header>
    )
}

export default Header