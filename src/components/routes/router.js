import { Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Project from "../Projects/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from '../Hero/Hero';
import NotFoundPage from '../NotFound/NotFound';



const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Hero/>}></Route>
                <Route exact path="/my-projects" element={<Project/>}></Route>
                <Route exact path="/my-skills" element={<Skills/>}></Route>
                <Route exact path="/contact-me" element={<Contact/>}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}



export default Router