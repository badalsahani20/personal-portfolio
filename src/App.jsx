import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "@/Pages/Home.jsx";
import ProjectDetails from "@/Pages/ProjectDetails.jsx";
import NotFound from "@/Pages/NotFound.jsx";
import {Toaster} from "@/components/ui/Toaster.jsx"; // changed Component -> component
import ThemeToggle from "@/components/ThemeToggle.jsx";

export default function App() {
    return (
        <>
            <Toaster />
            <ThemeToggle />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/project/:projectId" element={<ProjectDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
