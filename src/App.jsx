import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "@/Pages/Home.jsx";
import NotFound from "@/Pages/NotFound.jsx";
import {Toaster} from "@/Components/ui/toaster.jsx";

export default function App() {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}