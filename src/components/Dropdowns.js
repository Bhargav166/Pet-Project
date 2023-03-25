import React, { useState } from "react";
import "./Dropdowns.css";

function Dropdowns() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        console.log("isOpen before toggle:", isOpen);
        setIsOpen(!isOpen);
        console.log("isOpen after toggle:", isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={handleDropdown}>
                Dropdown
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
    );
}

export default Dropdowns;
