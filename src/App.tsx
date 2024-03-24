import "./App.scss";
import Home from "./components/Home/Home";
// import Employee from "./components/Employee/Employee";
import { team } from "./data/teamData";

function App() {
    return (
        <>
            <h3 className="logo">Ticket Tracker</h3>
            {/* <Employee team={team} /> */}
            <Home team={team} />
        </>
    );
}

export default App;
