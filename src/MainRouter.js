import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/auth/Authentication";
import Home from "./pages/home/Home";

export default function MainRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth/signin" element={<Authentication />} />
        </Routes>
    </BrowserRouter>
}