import React from 'react'
import {ArrowUp} from "lucide-react";

const Footer = () => {
    return (
        <footer className={"py-2 px-4 bg-transparent border-t border-border mt-12 pt-2 flex justify-between items-center"}>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <p className={"text-sm text-muted-foreground flex justify-center align-center"}>Copyright © Badal Sahani {new Date().getFullYear()} . All rights reserved.</p>
            </div>
            <a href="#hero" className={"ml-auto p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors "}>
                <ArrowUp size={20} />
            </a>
        </footer>
    )
}
export default Footer
