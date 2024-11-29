// Composant LogementTitle : affiche le titre et le lieu d'un logement
export function LogementTitle({ title, lieu }) {
    return (
        <div className="container-title">
            <h2 className="container-title__title">{title}</h2>
            <p className="container-title__lieu">{lieu}</p>
        </div>
    );
}
