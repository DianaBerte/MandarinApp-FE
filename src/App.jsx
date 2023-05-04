import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameOne from "./pages/Games/Beginner/gameOne.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/games/:level/:number" element={<GameOne />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;