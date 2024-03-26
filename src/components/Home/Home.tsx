import { Link } from "react-router-dom";
import { Team } from "../../types/team";
import "./Home.scss";

type HomeProps = {
    team: Team[];
};

const Home = ({ team }: HomeProps) => {
    return (
        <section className="home">
            <h1 className="home__heading"> Employees</h1>
            <div className="home__container">
                {team.map((member) => (
                    <Link
                        to={`/profile/${member.id}`}
                        key={member.id}
                        className="home__link"
                    >
                        <h3 className="home__employee-name">{member.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Home;
