import Navigation from './Navigation'

type HeaderProps = {
    name: string
}
function Header({ name }: HeaderProps) {
    return (
        <header>
            <a href="/" aria-label={`${name} - Home`}>
                {name}
            </a>

            <Navigation />
        </header>
    )
}
export default Header