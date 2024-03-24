import { Team } from "../../types/team";
import "./Home.scss";

type HomeProps = {
    team: Team[];
};

const Home = ({ team }: HomeProps) => {
    return (
        <section className="home-section">
            <h1 className="home-heading">Ticket T. Employees</h1>
            <div className="home-container">
                {team.map((employee) => (
                    // TODO: Add a router link to employee profile(by id)
                    <h3 key={employee.id} className="home__employee-name">
                        {employee.name}
                    </h3>
                ))}
            </div>
        </section>
    );
};

export default Home;
