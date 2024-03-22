import Counter from "../Counter/Counter";
import "./Card.scss";

type CardProps = {
    name: string;
    role: string;
};

const Card = ({ name, role }: CardProps) => {
    return (
        <div className="card-container">
            <div className="card-container__content">
                <h1 className="card-container__heading">{name}</h1>
                <p className="card-container__role">{role}</p>
                <Counter />
            </div>
        </div>
    );
};

export default Card;
