import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Team } from "../../types/team";
import Counter from "../Counter/Counter";
import SearchBox from "../SearchBox/SearchBox";
import "./Tickets.scss";

type TicketsProps = {
    team: Team[];
};

const Tickets = ({ team }: TicketsProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        setSearchTerm(input);
    };

    const filteredTickets = team.filter((employee) => {
        return employee.name.toLowerCase().includes(searchTerm);
    });

    return (
        <>
            <h1 className="tickets-heading">Tickets</h1>
            <SearchBox
                label="Search by Name"
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <div className="tickets">
                {filteredTickets.map((member) => (
                    <div className="tickets__content" key={member.id}>
                        <div>
                            <Link
                                to={`/profile/${member.id}`}
                                className="tickets__link"
                            >
                                <h1 className="ticket__heading">
                                    {member.name}
                                </h1>
                                <p className="ticket__role">{member.role}</p>
                            </Link>
                        </div>
                        <Counter />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tickets;
