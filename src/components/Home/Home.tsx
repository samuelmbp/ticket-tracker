import { Link } from "react-router-dom";
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
                {team.map((member) => (
                    <Link to={`/profile/${member.id}`} key={member.id}>
                        <h3 className="home__employee-name">{member.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Home;
