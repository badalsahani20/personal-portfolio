import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projectsData } from '../lib/projectsData';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A curated selection of applications I've engineered. Click on any project to explore its full case study, architecture details, and screenshot galleries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card/40 border border-border/40 backdrop-blur-xs rounded-xl overflow-hidden shadow-xs hover:border-primary/40 transition-all duration-300 card-hover flex flex-col justify-between"
                        >
                            <Link to={`/project/${project.id}`} className="block h-52 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </Link>
                            
                            <div className="p-6 flex flex-col justify-between flex-grow text-left">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="px-2.5 py-0.5 text-xs font-semibold rounded-full border border-border bg-secondary/30 text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-0.5 text-xs font-semibold text-primary/80">
                                                +{project.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <Link to={`/project/${project.id}`} className="block group/title">
                                        <h3 className="text-2xl font-bold mb-2 group-hover/title:text-primary transition-colors duration-300"> 
                                            {project.title} 
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-border/40 mt-auto">
                                    <Link 
                                        to={`/project/${project.id}`} 
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-hover hover:underline transition-colors"
                                    >
                                        Explore Case Study 
                                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.gitHubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            title="View GitHub Code"
                                        >
                                            <Github size={18} />
                                        </a>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            title="View Live Site"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/badalsahani20" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check out more projects on GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
