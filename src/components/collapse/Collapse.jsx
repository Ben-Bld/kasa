import React from "react";
import { useState } from "react";
import up from '../../assets/images/icons/up.svg'
import down from '../../assets/images/icons/down.svg'


export function Collapse({ title, text }) {

    const [isOpen, setIsOpen] = useState(false) //on crée le state, en le metant par défaut sur closed 
    //fonction pour changer l'état du state en cliquant (via onclick)
    function collapseOn({ title, text }) {
        setIsOpen(!isOpen)
    }


    return (
        <div className="collapse"  >

            <div className="collapse__title" >
                <p>{title}</p>
                {isOpen ? (
                    <img onClick={collapseOn} src={up} className="collapse__title__arrow"></img>
                ) : (
                    <img onClick={collapseOn} src={down} className="collapse__title__arrow"></img>
                )}
            </div>
            <div className="collapse__text">
                {isOpen && <p>{text}</p>}
            </div>

        </div>
    )
}