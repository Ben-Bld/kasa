import React from "react";
import logements from "../../datas/logements.json"
import { Caroussel } from "./Caroussel";
import { useParams } from 'react-router-dom';
import { Host } from './Host';
import { Lieu } from './Lieu';
import { LogementTitle } from './LogementTitle';
import { Rating } from './Rating';
import { Tags } from './Tags';

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
            <Caroussel cover={logements[index].cover} id={id} />
            <LogementTitle />
            <Host />
            <Lieu />
            <Rating />
            <Tags />
        </div>
    )
}