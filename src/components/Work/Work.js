import React from "react";
import Project from "../Project/Project";
import "./Work.css";

const Work = () => {
    return (
        <div className="work">
            <div className="workContainer">
                <p className="tittleText bold" style={{ marginBottom: "50px" }}>
                    Work
                </p>
                <div className="projectContainerX">
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default Work;
