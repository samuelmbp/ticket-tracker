import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        count === 0 ? setCount(0) : setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <h4 className="counter-container__heading">Counter</h4>
            <p className="counter-container__count">{count}</p>
            <div className="counter-container__buttons">
                <button
                    onClick={handleDecrement}
                    className="counter-container__button"
                >
                    -
                </button>
                <button
                    onClick={handleIncrement}
                    className="counter-container__button"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
