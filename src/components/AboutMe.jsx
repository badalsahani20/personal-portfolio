import React from 'react'
import {Code, GraduationCap, Rocket} from 'lucide-react'

const AboutMe = () => {
    return (
        <section id= "about" className= "py-24 px-4 relative">
            <div className= "container mx-auto max-w-5xl">
                <h2 className= "text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className= "text-primary"> Me </span>
                </h2>

                <div className= "grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Who I Am?</h3>
                        <p className="text-muted-foreground leading-relaxed text-left">
                            Software Developer skilled in Java, MERN Stack, PostgreSQL, and RESTful API development. Experienced in building full-stack applications, integrating AI-powered features, and designing scalable backend systems.
                        </p>

                        <p className="text-muted-foreground leading-relaxed text-left">
                            Strong problem-solving mindset with consistent practice in Data Structures and Algorithms. Currently focused on developing Notesify, an AI-powered educational platform that streamlines note creation and learning workflows.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get in Touch</a>
                            <a
                                href="/Badal_Sahani_Resume.pdf"
                                download="Badal_Sahani_Resume.pdf"
                                className="p-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg "> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and Web Applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Learning</h4>
                                    <p className="text-muted-foreground">
                                        Continuously expanding my knowledge in PostgreSQL, MERN Stack, and DSA through hands-on projects and coursework.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Rocket className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Career Aspirations</h4>
                                    <p className="text-muted-foreground">
                                        Eager to launch my career and contribute to meaningful projects with enthusiasm and fresh perspectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
