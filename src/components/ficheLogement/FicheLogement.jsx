import React from "react";
import logements from "../../datas/logements.json"
import { Slideshow } from "./Slideshow/Slideshow";
import { useParams } from 'react-router-dom';
import { Host } from './Host/Host';
import { Lieu } from "./Lieu/Lieu";
import { LogementTitle } from './LogementTitle/LogementTitle';
import { Rating } from './Rating/Rating';
import { Tags } from './Tags/Tags';

export function FicheLogement() {
    let { id } = useParams();
    let array = logements;
    const index = array.map(i => i.id).indexOf(id);
    // console.log(url)
    // let cover = logements.findIndex(useParams());
    // console.log(cover);
    // console.log("***" + logements[1].cover)
    return (
        <div className="container-produit">
            <Slideshow slide={logements[index].pictures} id={id} />
            <div className="container-produit__details"><LogementTitle title={logements[index].title} />
                <Host name={logements[index].host.name} avatar={logements[index].host.picture} />
                <Lieu lieu={logements[index].location} />
                <Rating />
                <Tags /></div>

        </div>
    )
}