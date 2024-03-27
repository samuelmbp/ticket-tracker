import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Team } from "../../types/team";
import Counter from "../Counter/Counter";
import SearchBox from "../SearchBox/SearchBox";
import "./Tickets.scss";
import Dropdown from "../Dropdown/Dropdown";

type TicketsProps = {
    team: Team[];
};

const Tickets = ({ team }: TicketsProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedDropdown, setSelectedDropdown] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        setSearchTerm(input);
    };

    const handleDropdownChange = (event: FormEvent<HTMLSelectElement>) => {
        const selectedValue = event.currentTarget.value;
        setSelectedDropdown(selectedValue);
    };

    const filteredTickets = team.filter((employee) => {
        if (searchTerm && selectedDropdown) {
            return (
                employee.name.toLowerCase().includes(searchTerm) &&
                employee.role?.toLowerCase().includes(selectedDropdown)
            );
        } else if (searchTerm) {
            return employee.name.toLowerCase().includes(searchTerm);
        } else if (selectedDropdown) {
            return employee.role?.toLowerCase().includes(selectedDropdown);
        }
        // Show all results
        return true;
    });

    const roles: string[] = [];
    team.forEach((member) => {
        if (member.role && !roles.includes(member.role)) {
            roles.push(member.role);
        }
    });

    return (
        <>
            <h1 className="tickets-heading">Tickets</h1>
            <div className="flex">
                <SearchBox
                    label="Search by Name"
                    searchTerm={searchTerm}
                    handleInput={handleInput}
                />
                <Dropdown
                    label="Filter by Role:"
                    options={roles}
                    value={selectedDropdown}
                    onChange={handleDropdownChange}
                />
            </div>
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
