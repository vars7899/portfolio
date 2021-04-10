import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
// import Mail from "./components/Mail/Mail";

//Basic Css styling
import "./App.css";

function App() {
    const [start, setStart] = useState(true);

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <div className="App">
            {/* <Mail /> */}
            <Navbar />
            <Hero />
            <About data-aos="fade-up" id="about" />
            <Work id="work" />
            <Contact id="contact" />
        </div>
    );
}

export default App;
