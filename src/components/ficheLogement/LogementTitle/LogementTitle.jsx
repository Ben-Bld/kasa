


export function LogementTitle(props) {
    return (
        <div className="container-title">
            <h2 className="container-title__title">{props.title}</h2>
            <p className="container-title__lieu">{props.lieu}</p>
        </div>
    )
}