import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import AdminsOnly from "./pages/Admins/AdminsOnly.jsx";
import HandleGames from "./pages/Admins/HandleGames.jsx";
import HandleUsers from "./pages/Admins/HandleUsers.jsx";
import GameOne from "./pages/Games/Beginner/gameOne.jsx";
import ChooseYourLevel from "./pages/Homepage/ChooseYourLevel.jsx";
import StartPage from "./pages/Homepage/StartPage.jsx";
import UserProfile from "./pages/Profile/ProfilePage.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import LoginComponent from "./pages/Login/LoginComponent.jsx";
import GameTwo from "./pages/Games/Beginner/gameTwo";
import GameFour from "./pages/Games/Intermediate/gameFour";
import GameFive from "./pages/Games/Intermediate/gameFive";
import GamesCompleted from "./pages/Games/gamesCompleted.jsx"
import GameThree from "./pages/Games/Beginner/gameThree.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginComponent /> } />
                <Route path="/registration" element={<Registration />} />
                <Route path="/" element={<Homepage />}  />
                <Route path="/chooseYourLevel" element={<ChooseYourLevel />} />
                <Route path="/start/:level" element={< StartPage />} />
                
                <Route path="/games/:level" element={<GameOne />}  />
                <Route path="/games/beginner/second" element={< GameTwo />} />
                <Route path="/games/beginner/third" element={< GameThree />} />

                <Route path="/games/intermediate/second" element={< GameFour />} />
                <Route path="/games/intermediate/third" element={< GameFive />} />

                {/* <Route path="/games/advanced/second" element={< GameSix />} />
                <Route path="/games/advanced/third" element={< GameSeven />} /> */}

                <Route path="/games/completed" element={<GamesCompleted />} />

                <Route path="/users/me" element={ <UserProfile /> } />
                <Route path="/admin" element={<AdminsOnly />} />
                <Route path="/admin/handleGames" element={<HandleGames />} />
                <Route path="/admin/handleUsers" element={<HandleUsers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;