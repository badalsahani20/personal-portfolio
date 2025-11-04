import React from 'react'
import ChefMistral from '../assets/Chef-Mistral.png'
import WeatherApp from '../assets/weather-app.png'
import {ArrowRight, ExternalLink} from "lucide-react";
import {Github} from "lucide-react";
import AiAnalyzer from '../assets/AiResumeAnalyzer.png'

const projects = [
    {
        id: 1,
        title: "Ai Resume Analyzer",
        description: 'AI-powered resume analysis tool that evaluates your resume for ATS compatibility, content quality, tone, structure, and skills. It provides an overall score with actionable improvement suggestions.',
        image: AiAnalyzer,
        tags: ['React', 'Tailwind', 'Puter.js'],
        url: "https://skill-scanner-beta.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/ai-resume-analyzer",
    },
    {
        id: 2,
        title: "AI Chef",
        description: "Chef Mistral – your AI-powered kitchen assistant that turns pantry ingredients into delicious recipes.",
        image: ChefMistral,
        tags: ["React", "CSS"],
        url:"https://recipe-generator-9ggdvrn79-badalsahani20s-projects.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/Recipe-Generator",
    },
    {
        id: 3,
        title: "Weather App",
        description: "interactive application built with HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeatherMap API.",
        image: WeatherApp,
        tags: ["HTML", "CSS", "JAVASCRIPT"],
        url:"https://weather-app-zggx.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/WeatherApp",
    },

]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className= "text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} /></a>
                                    <a
                                        href={project.gitHubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/badalsahani20" target="_blank">
                        Check out more projects on GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}
