import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameOne from "./pages/Games/Beginner/gameOne.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />}  /> */}
                <Route path="/games/:level/:number" element={<GameOne />}  />
                {/* What I want to happen: *User clicks on Beginner, Start Game*
                <Route element={<GamePage />} path="/games/beginner/:number"   />
                */}
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;