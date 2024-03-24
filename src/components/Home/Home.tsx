import { Team } from "../../types/team";
import "./Home.scss";

type HomeProps = {
    team: Team[];
};

const Home = ({ team }: HomeProps) => {
    return (
        <section className="home-section">
            <h1 className="home-heading">Employees</h1>
            <div className="home-container">
                {team.map((employee) => (
                    <h3 className="home__employee-name">{employee.name}</h3>
                ))}
            </div>
        </section>
    );
};

export default Home;
