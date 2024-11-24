


export function Host(props) {
    return (
        <div className="container-host" >
            <p className="container-host__name">{props.name}</p>
            <img className="container-host__avatar" src={props.avatar}></img>
        </div>
    )
}