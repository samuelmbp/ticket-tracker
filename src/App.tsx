import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Tickets from "./components/Tickets/Tickets";
import { team } from "./data/teamData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/ticket-tracker">
            <Nav />
            <Routes>
                <Route path="/" element={<Home team={team} />} />
                <Route path="/tickets" element={<Tickets team={team} />} />
                <Route path="/profile/:id" element={<Profile team={team} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
