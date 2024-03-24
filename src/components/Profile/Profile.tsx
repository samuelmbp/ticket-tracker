import "./Profile.scss";
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
        <>
            <h1 className="profile-heading">Profile Information</h1>
            <div className="profile-card">
                <img
                    src={member.profile.profilePicture}
                    alt={member.name}
                    className="profile-card__image"
                />
                <div className="profile-card__info">
                    <h1 className="profile-card__name">{member.name}</h1>
                    <p className="profile-card__role">{member.role}</p>
                    <div className="profile-card__details">
                        <p>
                            <strong>Experience:</strong>{" "}
                            {member.profile.experience}
                        </p>
                        <p>
                            <strong>Department:</strong>{" "}
                            {member.profile.department}
                        </p>
                        <p>
                            <strong>Tech stack:</strong>{" "}
                            {member.profile.techstack.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
