import "./navbar.css";
import { useState } from "react";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    return (
        <div>
            <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-p">
                    <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
                    </div>
                    <div className="header-logo">
                        <span>
                            <a href="/"> Abraham Elie</a>
                        </span>
                    </div>
                    <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
                        <a className="header-option header-option-seperator" href="/my-projects">Projects </a>
                        <a className="header-option header-option-seperator" href="/my-skills">Skills </a>
                        <a className="header-option header-option-seperator" href="contact-me">Contact Me </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;