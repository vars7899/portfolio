import React from "react";
import "./About.css";
const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer" data-aos="slide-up">
                <div className="aboutContent">
                    <p className="tittleText bold tittleBottom">About me</p>
                    <p className="text4 contain  light">
                        Hi my name is Vaibhav Dhiman, a software engineer based
                        in Vancouver, BC.
                    </p>
                    <p className="text4 contain  light">
                        I enjoy creating things that live on the internet,
                        whether that be websites, applications or anything in
                        between. My goal is to always build product that provide
                        pixel-perfect, performant experience.
                    </p>
                    <p className="text4 contain  light">
                        I will be graduating upcoming May Kwantlen Polytechnic
                        University and right now I am looking for Internship.
                    </p>
                    <br />
                    <p className="text4 light">
                        Here are few technologies I've been working recently:
                    </p>
                    <br />
                    <div className="tech">
                        <div className="box left1">
                            <p className="text5 light">JavaScript</p>
                            <p className="text5 light">React</p>
                            <p className="text5 light">Node.js</p>
                        </div>
                        <div className="box left2">
                            <p className="text5 light">HTML & (S)CSS</p>
                            <p className="text5 light">Bootstrap</p>
                            <p className="text5 light">WordPress</p>
                        </div>
                        <div className="box right1">
                            <p className="text5 light">ChartJS</p>
                            <p className="text5 light">ExpressJS</p>
                            <p className="text5 light">MomentJs</p>
                        </div>
                        <div className="box right2">
                            <p className="text5 light">MySQL</p>
                            <p className="text5 light">postgrSQL</p>
                            <p className="text5 light">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
