import React, { useState } from "react";
import up from '../../assets/images/icons/up.svg';

export function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
            <div className="collapse__title">
                <p>{title}</p>
                <img
                    onClick={toggleCollapse}
                    src={up}
                    className={`collapse__title__arrow ${isOpen ? 'rotate-180' : ''}`}
                    alt="Toggle Collapse"
                />
            </div>
            <div className={`collapse__text ${isOpen ? 'show' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    );
}
