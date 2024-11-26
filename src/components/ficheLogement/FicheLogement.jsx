import React from "react";
import logements from "../../datas/logements.json"
import { Slideshow } from "./Slideshow/Slideshow";
import { useParams } from 'react-router-dom';
import { Host } from './Host/Host';
import { Lieu } from "./Lieu/Lieu";
import { LogementTitle } from './LogementTitle/LogementTitle';
import { Rating } from './Rating/Rating';
import { Tags } from './Tags/Tags';
import { Collapse } from "../collapse/Collapse";


export function FicheLogement(props) {
    let { id } = useParams();
    let array = logements;
    const index = array.map(i => i.id).indexOf(id);


    let valeurBase = logements[index].equipments;
    valeurBase.join("<br/>")
    const data = [

        {
            title: 'Equipements',
            // Créer une liste avec les équipements
            text: logements[index].equipments.map(equipment => (
                <p className='TextCollapse' key={equipment}>{equipment}</p>
            ))
        }
    ];

    console.log("data" + data)


    return (
        <div className="container-produit">
            <Slideshow slide={logements[index].pictures} id={id} />
            <div className="container-produit__details"><LogementTitle title={logements[index].title} lieu={logements[index].location} />
                <Host name={logements[index].host.name} avatar={logements[index].host.picture} />

                <Rating />
                <Tags tags={logements[index].tags} />
                <div className="container-produit__collapse">
                    <div className="container-produit__collapse___left">
                        <Collapse title="Description" text={logements[index].description} />
                    </div>
                    <div className="container-produit__collapse___right">
                        <Collapse title="Equipments" text={logements[index].equipments} />
                    </div>
                </div>






            </div>

        </div>
    )
}