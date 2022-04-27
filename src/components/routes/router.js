import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Project from "../Projects/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HomePage from '../../pages/HomePage';


const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/my-projects" element={<Project/>}></Route>
                <Route exact path="/my-skills" element={<Skills/>}></Route>
                <Route exact path="/contact-me" element={<Contact/>}></Route>

                    {/* <Route exact path="/404" element={<NotFoundPage />}></Route>
                    <Navigate to="/404"/> */}
            </Routes>
            <Footer />
        </div>
    )
}



export default Router