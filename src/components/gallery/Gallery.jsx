import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../card/Card";
import logements from "../../datas/logements.json"

export function Gallery() {
    return (
        <div className="gallery">
            {logements.map((item) => (
                <div key={item.id} className="gallery__item">
                    <Link to={`/logements/${item.id}`}>
                        <Card cover={item.cover} title={item.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
}