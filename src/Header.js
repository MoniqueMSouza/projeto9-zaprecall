import logo from './assets/img/logo.png'

function Header() {
    return (
        <div className="logo-container">
            <img src={logo}></img>
            <h1> ZapRecall</h1>
        </div>
    )
}

export default Header 