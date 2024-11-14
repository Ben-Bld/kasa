import React from "react";



export function Card(item, image) {
    return (
        <div className="card">
            <div className="card__cover-shadow"></div>
            <img className="card__cover" src={item.cover} alt="" />
            <a className="card__title">{item.title}</a>
        </div>
    )
}