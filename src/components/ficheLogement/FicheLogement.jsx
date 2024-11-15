
import logements from "../../datas/logements.json"
import { Caroussel } from "./Caroussel"
import { useParams } from 'react-router-dom';



export function FicheLogement(logements) {
    console.log(logements.map)
    // let cover = logements.findIndex(useParams());
    // console.log(cover);
    // console.log("***" + logements[1].cover)


    return (
        <div className="container-produit">
            <Caroussel image={logements.cover} />
            {/* <LogementTitle />
            <Host />
            <Lieu />
            <Rating />
            <Tags /> */}
        </div>
    )
}