import React from "react";
import project_data from "./ProjectData";
import "./Project.css";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
const Project = () => {
    // data - aos = "fade-down";
    return (
        <div className="project">
            {project_data.map((project) => {
                return (
                    <div
                        data-aos="zoom-in-up"
                        className="projectContent"
                        key={project.p_id}
                    >
                        <p
                            className="workText1 contrast"
                            style={{
                                marginBottom: "5%",
                                fontWeight: "bolder",
                                letterSpacing: "2px",
                            }}
                        >
                            {project.p_name}
                        </p>
                        <p
                            className="workText2"
                            style={{ color: "#f2f2f8", marginBottom: "4%" }}
                        >
                            {project.p_desc}
                        </p>
                        <p
                            className="workText2"
                            style={{ color: "#f2f2f8", marginBottom: "4%" }}
                        >
                            {project.p_tech}
                        </p>
                        <div className="web">
                            <a href={project.p_git}>
                                <AiFillGithub
                                    style={{
                                        color: "#f2f2f8",
                                        fontSize: "1.5rem",
                                        marginRight: "4%",
                                    }}
                                />
                            </a>
                            <a href={project.p_web}>
                                <FiExternalLink
                                    style={{
                                        color: "#f2f2f8",
                                        fontSize: "1.5rem",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
