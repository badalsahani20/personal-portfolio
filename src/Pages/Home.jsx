import React from 'react'
import ThemeToggle from "@/Components/ThemeToggle.jsx";
import StarBackground from "@/Components/StarBackground.jsx";
import Navbar from "@/Components/Navbar.jsx";
import Hero from "@/Components/Hero.jsx";
import AboutMe from "@/Components/AboutMe.jsx";
import Skills from "@/Components/Skills.jsx";
import {Projects} from "@/Components/Projects.jsx";
import Contact from "@/Components/Contact.jsx";
import Footer from "@/Components/Footer.jsx"

const Home = () => {
    return (
        <div className= "min-h-screen">
            {/*{Theme Toggle}*/}
            <ThemeToggle />

        {/* Background Effects */}

            <StarBackground />

        {/* Navbar */}

            <Navbar />

        {/* Main Content */}
            <main>
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </main>

        {/* Footer */}
            <Footer />
        </div>
    )
}
export default Home
