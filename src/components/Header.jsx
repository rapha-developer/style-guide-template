
function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <span className="header__leftLine"></span>
                <h1 className="header__title uppercase">{props.title}</h1>
            </div>
        </header>
    )
}
export default Header