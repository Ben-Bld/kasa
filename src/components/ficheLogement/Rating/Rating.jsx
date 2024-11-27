import logements from "../../../datas/logements.json"
import starFull from '../../../assets/images/icons/starFull.svg'
import starEmpty from '../../../assets/images/icons/starEmpty.svg'

export function Rating(props) {

    let ratingNumber = props.rating

    const stars = Array.from({ length: 5 }, (_, index) => index < ratingNumber);
    //tableau true ou false selon les étoiles
    console.log(stars)
    return (
        <div className="container-star">
            {stars.map((isFull, index) => (
                <img
                    key={index}
                    src={isFull ? starFull : starEmpty}
                    alt={isFull ? 'Full Star' : 'Empty Star'}
                    className={"container-star__icon"}

                />
            ))}
        </div>
    );
};