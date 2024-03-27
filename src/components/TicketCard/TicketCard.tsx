import { Link } from "react-router-dom";
import "./TicketCard.scss";

type TicketCardProps = {
    id: number;
    name: string;
    role: string;
};

const TicketCard = ({ id, name, role }: TicketCardProps) => {
    return (
        <div className="ticket">
            <Link to={`/profile/${id}`} className="ticket__link">
                <h1 className="ticket__heading">{name}</h1>
                <p className="ticket__role">{role}</p>
            </Link>
        </div>
    );
};

export default TicketCard;
