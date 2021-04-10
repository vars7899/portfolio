import React, { useState } from "react";
import Typical from "react-typical";
import Button from "../Button/Button";
import "./Navbar.css";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    const [burger, setBurger] = useState(false);

    return (
        <nav>
            <div className="logoContainer" data-aos="fade-down-left">
                <p
                    onClick={() => {
                        scroll.scrollToTop();
                        if (burger === true) {
                            setBurger(!burger);
                        }
                    }}
                >
                    {" "}
                    <Typical
                        loop={Infinity}
                        steps={["<", 10000, "</", 10000, "</>", 10000]}
                    />
                </p>
            </div>
            <div
                // data-aos="fade"
                className="burgerContainer"
                onClick={() => {
                    setBurger(!burger);
                }}
            >
                <i className="fas fa-bars"></i>
            </div>

            <ul className={burger ? "navList visible" : "navList"}>
                <div className="navListContent">
                    <li data-aos="fade-down-right">
                        <LinkS
                            to="about"
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                setBurger(!burger);
                            }}
                        >
                            About
                        </LinkS>
                    </li>
                    <li data-aos="fade-down-right">
                        <LinkS
                            to="work"
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                setBurger(!burger);
                            }}
                        >
                            Work
                        </LinkS>
                    </li>
                    <li data-aos="fade-down-right">
                        <LinkS
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                setBurger(!burger);
                            }}
                        >
                            Contact
                        </LinkS>
                    </li>
                    {/* <li>
                    <Button input={`Resume`} setStyle={``}></Button>
                </li> */}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
