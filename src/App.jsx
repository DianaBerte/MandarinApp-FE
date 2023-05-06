import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import GameOne from "./pages/Games/Beginner/gameOne.jsx";
import ChooseYourLevel from "./pages/Homepage/ChooseYourLevel.jsx";
import StartPage from "./pages/Homepage/StartPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}  />
                <Route path="/chooseYourLevel" element={<ChooseYourLevel />} />
                <Route path="/start/:level" element={< StartPage />} />
                <Route path="/games/:level" element={<GameOne />}  />
                {/* What I want to happen: *User clicks on Beginner, Start Game*
                <Route element={<GamePage />}  path="/games/beginner/:number"  />
                */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;