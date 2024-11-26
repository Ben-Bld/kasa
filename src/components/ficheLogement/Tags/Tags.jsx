
import logements from "../../../datas/logements.json"


export function Tags(props) {

    let tagsLogement = props.tags



    return (
        <div className="container-tag">
            {tagsLogement.map((item) => (
                <div key={item} className="container-tag__item">
                    <button>{item}</button>
                </div>
            ))}
        </div>
    );

}