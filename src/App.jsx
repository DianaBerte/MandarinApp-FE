import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import GameOne from "./pages/Games/Beginner/gameOne.jsx";
import ChooseYourLevel from "./pages/Homepage/ChooseYourLevel.jsx";
import StartPage from "./pages/Homepage/StartPage.jsx";
import LoginComponent from "./pages/Login/LoginComponent.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}  />
                <Route path="/login" element={<LoginComponent /> } />
                <Route path="/chooseYourLevel" element={<ChooseYourLevel />} />
{/*1. qua tutto bene, hai predisposto delle rotte dinamiche per <StartPage /> e <GameOne />, e hai chiamato level la parte dell'URL dopo "start/" e "games/".
Quindi <StartPage /> e <GameOne /> verranno caricati quando la rotta è qualcosa tipo "/start/beginner", oppure "/start/buongiorgio", cose così.
In questi esempi, beginner e buongiorgio sono il valore del parametro che hai chiamato "level" */}
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