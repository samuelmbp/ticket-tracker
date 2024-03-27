import { FormEventHandler } from "react";
import "./Dropdown.scss";

type DropdownProps = {
    label: string;
    options: string[];
    value: string;
    onChange: FormEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ label, options, value, onChange }: DropdownProps) => {
    return (
        <section className="dropdown">
            <label className="dropdown__label" htmlFor="role-dropdown">
                {label}
            </label>
            <select
                className="dropdown__select"
                id="role-dropdown"
                value={value}
                onChange={onChange}
            >
                <option value="">All</option>
                {options.map((option, idx) => (
                    <option key={idx} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default Dropdown;
