import React from 'react'
import ThemeToggle from "@/components/ThemeToggle.jsx";
import StarBackground from "@/components/StarBackground.jsx";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import AboutMe from "@/components/AboutMe.jsx";
import Skills from "@/components/Skills.jsx";
import {Projects} from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx"

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
