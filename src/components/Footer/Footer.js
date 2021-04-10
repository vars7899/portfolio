import "./Footer.css";
import { FiGithub, FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/vaibhav_dman/?hl=en">
                <FiInstagram
                    style={{
                        fontSize: "2rem",
                        margin: "5px 10px",
                        color: "#1f1f1f",
                    }}
                />
            </a>
            <a href="https://github.com/vars7899">
                <FiGithub
                    style={{
                        fontSize: "2rem",
                        margin: "5px 10px",
                        color: "#1f1f1f",
                    }}
                />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-dhiman/">
                {" "}
                <FiLinkedin
                    style={{
                        fontSize: "2rem",
                        margin: "5px 10px",
                        color: "#1f1f1f",
                    }}
                />
            </a>
            <a href="https://www.facebook.com/vaibhav.dman/">
                <FiFacebook
                    style={{
                        fontSize: "2rem",
                        margin: "5px 10px",
                        color: "#1f1f1f",
                    }}
                />
            </a>
        </div>
    );
};

export default Footer;
