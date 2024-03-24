import "./Tickets.scss";
import { Team } from "../../types/team";
import Counter from "../Counter/Counter";

type TicketsProps = {
    team: Team[];
};

const Tickets = ({ team }: TicketsProps) => {
    return (
        <div className="tickets">
            {team.map((member) => (
                // TODO: Make each card a link to profile.
                <div className="tickets__content" key={member.id}>
                    <div>
                        <h1 className="ticket__heading">{member.name}</h1>
                        <p className="ticket__role">{member.role}</p>
                    </div>
                    <Counter />
                </div>
            ))}
        </div>
    );
};

export default Tickets;
