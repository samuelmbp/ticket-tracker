import "./Employee.scss";
import { Team } from "../../types/team";
import Card from "../Card/Card";

type EmployeeProps = {
    team: Team[];
};

const Employee = ({ team }: EmployeeProps) => {
    return (
        <div className="employee-container">
            {team.map((member) => (
                <Card key={member.id} name={member.name} role={member.role} />
            ))}
        </div>
    );
};

export default Employee;
