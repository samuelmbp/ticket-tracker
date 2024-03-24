import "./Tickets.scss";
import { Team } from "../../types/team";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

type TicketsProps = {
    team: Team[];
};

const Tickets = ({ team }: TicketsProps) => {
    return (
        <div className="tickets">
            {team.map((member) => (
                <div className="tickets__content" key={member.id}>
                    <div>
                        <Link to={`/profile/${member.id}`}>
                            <h1 className="ticket__heading">{member.name}</h1>
                            <p className="ticket__role">{member.role}</p>
                        </Link>
                    </div>
                    <Counter />
                </div>
            ))}
        </div>
    );
};

export default Tickets;
