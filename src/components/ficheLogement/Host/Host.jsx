
/**
 * Composant pour l'hôte .
 * Affiche le nom et l'avatar de l'hôte.
**/
export function Host(props) {
    return (
        <div className="container-host">
            {/* Nom de l'hôte */}
            <p className="container-host__name">{props.name}</p>
            {/* Avatar de l'hôte */}
            <img className="container-host__avatar" src={props.avatar} alt={`Avatar de ${props.name}`} />
        </div>
    );
}