import React from 'react'
import StarBackground from "@/components/StarBackground.jsx";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import AboutMe from "@/components/AboutMe.jsx";
import Skills from "@/components/Skills.jsx";
import DeveloperStats from "@/components/DeveloperStats.jsx";
import {Projects} from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx"

const Home = () => {
    return (
        <div className= "min-h-screen">
        {/* Background Effects */}
 
             <StarBackground />
 
         {/* Navbar */}
 
             <Navbar />
 
         {/* Main Content */}
             <main>
                 <Hero />
                 <AboutMe />
                 <Skills />
                 <DeveloperStats />
                 <Projects />
                 <Contact />
             </main>
 
         {/* Footer */}
             <Footer />
         </div>
     )
 }
 export default Home
