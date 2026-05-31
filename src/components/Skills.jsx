import React, {useState} from 'react'
import {cn} from "@/lib/utils.js";

const skills = [
    { name: "JavaScript", level: 65, category: "frontend" },
    { name: "React", level: 60, category: "frontend" },
    { name: "Tailwind CSS", level: 50, category: "frontend" },
    { name: "TypeScript", level: 40, category: "frontend" },

    // Backend
    { name: "Java", level: 70, category: "backend" },
    { name: "Express Js", level: 50, category: "backend" },
    { name: "DSA", level: 40, category: "backend" },
    { name: "NodeJs", level: 40, category: "backend" },

    // Database
    { name: "MySQL", level: 70, category: "database" },
    { name: "MongoDB", level: 40, category: "database" },

    // Tools
    { name: "Git/Github", level: 60, category: "tools" },
    { name: "WebStorm", level: 60, category: "tools" },
    { name: "Docker", level: "Learning", category: "tools" },
    { name: "Vs Code", level: 60, category: "tools"},
    { name: "HTTPie", level: 50, category: "tools" },
]

const categories = ["all" , "frontend" , "backend" , "database" , "tools"];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary"> Skills </span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button onClick={() => setActiveCategory(category)} key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex justify-between mb-2">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-sm text-muted-foreground">
                                    {typeof skill.level === "number" ? `${skill.level}%` : skill.level}
                                </span>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                {typeof skill.level === "number" ? (
                                    <div
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                ) : (
                                    <div className="bg-gradient-to-r from-primary/60 to-primary/20 h-2 rounded-full animate-pulse" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
