import "./App.scss";
import Employee from "./components/Employee/Employee";
import team from "./data/teamData";

function App() {
    return (
        <>
            <h1 className="logo">Ticket Tracker</h1>
            <Employee team={team} />
        </>
    );
}

export default App;
