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





    let equipements = logements[index].equipments

    console.log(equipements.equipments)


    return (
        <div className="container-produit">
            <Slideshow slide={logements[index].pictures} id={id} />
            <div className="container-produit__details"><LogementTitle title={logements[index].title} lieu={logements[index].location} />
                <Host name={logements[index].host.name} avatar={logements[index].host.picture} />

                <Tags className="tags" tags={logements[index].tags} />
                <Rating rating={logements[index].rating} className="rating" />
                <div className="container-produit__collapse">
                    <div className="container-produit__collapse___left">
                        <Collapse key={"description  " + id} title="Description" text={<p>{logements[index].description}</p>} />
                    </div>
                    <div className="container-produit__collapse___right">
                        <Collapse
                            key={"equipments " + id}
                            title="Equipements"
                            text={equipements.map((item, index) => (
                                <div key={`equip-${index}`} className="container-produit__collapse___right__equipments">
                                    <p className="text-equipements">{item}</p>
                                </div>
                            ))}
                        />


                    </div>
                </div>






            </div>

        </div>
    )
}