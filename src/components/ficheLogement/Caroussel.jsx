


export function Caroussel(props) {
    console.log("carou" + props.cover)
    console.log("id" + props.id)
    return (
        <div >

            <img src={props.cover} alt="" />
        </div>
    )
}