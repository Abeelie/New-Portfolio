import "./hero.css";
import Typical from "react-typical";
import HeroImage from "../../assets/Hero/hero.jpg";
import About from "../About/About";

const Hero = () => {
    return(
        <div className="hero-section">
            <img id="myImage" src={HeroImage} alt="hero"/>
            
            <div className="hero-text">
                <p className="title">Hi, I'm Abraham Elie</p>
                <h6 className="subtitle">
                    <Typical 
                        loop={Infinity}
                        steps={[
                            "Cheerful Developer", 1000,
                            "Creative Oracle", 1000,
                            "Full Stack Developer", 1000,
                            "React Professional", 1000,
                            "WordPress Warrior", 1000,
                            ]}
                    />
                </h6>
            </div>

            <About />
        </div>
    )
}


export default Hero;