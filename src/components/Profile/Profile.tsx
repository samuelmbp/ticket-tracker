import { useParams } from "react-router-dom";
import { Team } from "../../types/team";

type ProfileProps = {
    team: Team[];
};
const Profile = ({ team }: ProfileProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) return;

    const memberId = parseInt(id);
    const member = team.find((member) => member.id === memberId);

    if (!member) return;

    return (
        <div>
            <h1>{member.name}</h1>
            <p>Role {member.role}</p>
        </div>
    );
};

export default Profile;
