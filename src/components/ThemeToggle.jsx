import React, {useEffect, useState} from 'react';
import {Moon , Sun} from 'lucide-react';
import {cn} from "@/lib/utils.js";

const ThemeToggle = () => {

    const [isDarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme= () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("fixed top-5 right-7 max-sm:right-0 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden cursor-pointer")}>
            {isDarkMode ? (<Sun className= "h-6 w-6 text-yellow-300" />
                ) : (
            <Moon className= "h-6 w-6 text-blue-900" />
            )}
        </button>
    )
}
export default ThemeToggle
