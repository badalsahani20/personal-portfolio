import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';
import StarBackground from "@/components/StarBackground.jsx";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [activeScreenshot, setActiveScreenshot] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useEffect(() => {
        const found = projectsData.find(p => p.id === projectId);
        if (found) {
            setProject(found);
        }
        // Scroll to top when loading a new project page
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-4 relative">
                <StarBackground />
                <div className="gradient-border p-8 max-w-md w-full text-center relative z-10 backdrop-blur-md bg-card/40">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <p className="text-muted-foreground mb-6">The project you are looking for does not exist or has been removed.</p>
                    <Link to="/" className="cosmic-button inline-flex items-center gap-2">
                        <ArrowLeft size={16} /> Back to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setActiveScreenshot(project.screenshots[index]);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        setActiveScreenshot(null);
    };

    const nextScreenshot = (e) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        const nextIndex = (lightboxIndex + 1) % project.screenshots.length;
        setLightboxIndex(nextIndex);
        setActiveScreenshot(project.screenshots[nextIndex]);
    };

    const prevScreenshot = (e) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        const prevIndex = (lightboxIndex - 1 + project.screenshots.length) % project.screenshots.length;
        setLightboxIndex(prevIndex);
        setActiveScreenshot(project.screenshots[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden pb-24">
            {/* Background effects */}
            <StarBackground />
            
            {/* Dynamic ambient background glow based on project's brand color */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full blur-[120px] pointer-events-none opacity-20 transition-all duration-1000 z-0"
                style={{
                    background: `radial-gradient(circle, rgba(${project.brandColor}, 0.8) 0%, rgba(${project.brandColor}, 0) 70%)`
                }}
            />

            {/* Header Navigation */}
            <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-border/40 bg-background/50">
                <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="font-medium text-sm">Back to Portfolio</span>
                    </Link>
                    
                    <div className="flex gap-3">
                        <a 
                            href={project.gitHubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-border bg-card/30 hover:bg-primary/10 hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300"
                            title="View Source Code"
                        >
                            <Github size={18} />
                        </a>
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-border bg-card/30 hover:bg-primary/10 hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300"
                            title="Launch Live App"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-5xl px-4 pt-10 relative z-10">
                
                {/* Project Title Block */}
                <div className="text-left mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span 
                                key={idx} 
                                className="px-3 py-1 text-xs font-semibold rounded-full border border-primary/20 bg-primary/5 text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-glow">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Big Showcase Hero Image */}
                <div className="relative group rounded-xl overflow-hidden border border-border/60 bg-card/20 shadow-2xl mb-16 aspect-video max-h-[500px]">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Launch overlay buttons on image */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center gap-2"
                            >
                                Launch Live App <ExternalLink size={16} />
                            </a>
                            <a 
                                href={project.gitHubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/40 font-medium transition-all duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Two Column Grid: Overview & Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                    {/* Project Overview Card */}
                    <div className="gradient-border p-8 bg-card/20 backdrop-blur-sm relative overflow-hidden flex flex-col">
                        <div 
                            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none"
                            style={{ backgroundColor: `rgb(${project.brandColor})` }}
                        />
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            Overview
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base">
                            {project.overview}
                        </p>
                    </div>

                    {/* Challenges & Solutions Card */}
                    <div className="gradient-border p-8 bg-card/20 backdrop-blur-sm relative overflow-hidden flex flex-col">
                        <div 
                            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none"
                            style={{ backgroundColor: `rgb(${project.brandColor})` }}
                        />
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            Key Challenges & Solutions
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base">
                            {project.challenges}
                        </p>
                    </div>
                </div>

                {/* Sub-Components / Core Sections (System Architecture) */}
                {project.modules && project.modules.length > 0 && (
                    <div className="mb-16 text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-glow">
                            System Architecture & Key Modules
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.modules.map((module, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 rounded-lg border border-border/40 bg-card/10 hover:bg-card/30 transition-all duration-300 hover:scale-[1.02] flex items-start gap-3"
                                >
                                    <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{module.name}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{module.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Advanced Technical Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-16 text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-glow">
                            {project.modules ? "Advanced Technical Features" : "Key Features & Implementations"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.features.map((feature, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 rounded-lg border border-border/40 bg-card/10 hover:bg-card/30 transition-all duration-300 hover:scale-[1.02] flex items-start gap-3"
                                >
                                    <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{feature.name}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Detailed Tech Stack Badges */}
                {project.techStackDetails && project.techStackDetails.length > 0 && (
                    <div className="mb-16 text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-glow">
                            Why We Chose This Tech Stack
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.techStackDetails.map((tech, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 rounded-lg border border-border/40 bg-card/15 hover:border-primary/30 transition-all duration-300"
                                >
                                    <h4 className="font-bold text-lg text-primary mb-2">{tech.name}</h4>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Premium Screenshots Gallery Section */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="text-left mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-glow">
                            Screenshots Gallery
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Click on any thumbnail to inspect high-resolution UI screen layouts, dashboard flows, and styling features.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.screenshots.map((shot, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative rounded-lg overflow-hidden border border-border/60 bg-card/25 aspect-video cursor-pointer hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img 
                                        src={shot.url} 
                                        alt={shot.label} 
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                                    />
                                    
                                    {/* Action Hover overlay */}
                                    <div className="absolute inset-0 bg-background/80 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="self-end p-2 bg-primary/20 rounded-full text-primary">
                                            <Maximize2 size={16} />
                                        </div>
                                        <p className="font-semibold text-sm text-foreground self-start">{shot.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* FULL SCREEN LIGHTBOX MODAL */}
            {activeScreenshot && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-50"
                        title="Close Gallery"
                    >
                        <X size={24} />
                    </button>

                    {/* Nav Arrow Prev */}
                    <button 
                        onClick={prevScreenshot}
                        className="absolute left-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-all duration-200 z-50 select-none hidden md:block"
                        title="Previous Screenshot"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Lightbox Main Frame */}
                    <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center">
                        <img 
                            src={activeScreenshot.url} 
                            alt={activeScreenshot.label} 
                            className="max-w-full max-h-[72vh] object-contain rounded-lg border border-white/10 shadow-2xl animate-fade-in"
                            onClick={(e) => e.stopPropagation()} 
                        />
                        <div className="mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm md:text-base">
                            {activeScreenshot.label} ({lightboxIndex + 1} / {project.screenshots.length})
                        </div>
                    </div>

                    {/* Nav Arrow Next */}
                    <button 
                        onClick={nextScreenshot}
                        className="absolute right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-all duration-200 z-50 select-none hidden md:block"
                        title="Next Screenshot"
                    >
                        <ChevronRight size={28} />
                    </button>
                    
                    {/* Mobile Swipe indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 md:hidden">
                        <button 
                            onClick={prevScreenshot}
                            className="px-4 py-2 rounded-md bg-white/10 text-white text-xs font-semibold"
                        >
                            Prev
                        </button>
                        <button 
                            onClick={nextScreenshot}
                            className="px-4 py-2 rounded-md bg-white/10 text-white text-xs font-semibold"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
