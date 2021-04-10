import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
const Contact = () => {
    return (
        <div className="xtend">
            <div className="contact">
                <div className="contactContainer" data-aos="slide-up">
                    <p className="tittleText dark bold">Get In Touch</p>
                    <p
                        className="text3 bold dark contact-X"
                        style={{ textAlign: "center" }}
                    >
                        Whether you have a question or just want to say hi, I'll
                        try my best to get back to you!
                    </p>
                    <a
                        className="btn-X"
                        href="mailto:vaibhav.dhiman.my@gmail.com"
                    >
                        Say Hello
                    </a>
                </div>
            </div>
            <div data-aos="zoom-out-down" className="footerdiv">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
