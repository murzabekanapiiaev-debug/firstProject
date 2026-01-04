import Logo from "../assets/Logo.svg"
import "./Header.css"



const Header = () => {
    return (

        <header className="header-side">
            <img src={Logo} alt="" />
            <div>
                <a href="">About us</a>
                <button>Let’s Talk </button>
            </div>
        </header>
    );
};

export default Header;
