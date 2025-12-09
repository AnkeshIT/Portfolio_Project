import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import logo from '../../../public/Ankesh.png';

export const Headers = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h2><img src={logo} alt="logo" className="Header_Logo"/><span>Ankesh Kumar</span></h2>
                        </NavLink>
                    </div>

                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/experience">Experience</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}