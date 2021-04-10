import React from "react";
import "./Button.css";
import { Link as LinkS } from "react-scroll";
const Button = ({ input, pcolor, margin, to_id }) => {
    return (
        <button
            className="btn"
            style={{
                color: `${pcolor}`,
                borderColor: `${pcolor}`,
                marginTop: `${margin}`,
            }}
        >
            <LinkS to={`${to_id}`} smooth={true} duration={500}>
                {input}
            </LinkS>
        </button>
    );
};

export default Button;
