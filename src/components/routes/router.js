import { Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Project from "../Projects/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from '../Hero/Hero';
import NotFoundPage from '../NotFound/NotFound';
import ScrollToTop from "react-scroll-to-top";



const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Hero/>} />
                <Route exact path="/my-projects" element={<Project/>} />
                <Route exact path="/my-skills" element={<Skills/>} />
                <Route exact path="/contact-me" element={<Contact/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ScrollToTop smooth color="#000000"/>
            <Footer />
        </div>
    )
}



export default Router