import React from "react";
import Button from "../Button/Button";
import main_bg from "../../videos/main_bg.mp4";
import Typical from "react-typical";
import "./Hero.css";
const Hero = () => {
    return (
        <div className="hero">
            <video
                className="main_bg_video"
                src={main_bg}
                loop
                muted
                autoPlay
                id="main_bg"
            ></video>
            <div className="home-video-overlay"></div>
            <div className="heroContainer">
                <div data-aos="slide-up" className="heroContent">
                    <p className="text2 light">Hi, my name is</p>
                    <p className="text1 contrast bold">Vaibhav Dhiman   </p>

                    <p className="typer light bold">
                        {/* I'm a Web developer */}
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                "I'm a Developer",
                                3000,
                                "I'm a Designer",
                                3000,
                                "I'm a Creator",
                                3000,
                            ]}
                        />
                    </p>
                    <p className="text3 light contain">
                        I'm a software engineer based in Vancouver, BC
                        specializing in building (and ocasionally designing)
                        exceptional websites, application and everything in
                        between.
                    </p>
                </div>
                <div data-aos="fade" className="mybtn">
                    <Button
                        input={"Get In Touch"}
                        pcolor={"#f2f2f883"}
                        margin={"5%"}
                        to_id={"contact"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
