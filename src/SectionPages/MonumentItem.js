const MonumentItem = props => {
    return (
        <>
            <li>
                <h3>{props.monument.name}<span className="pictureLink" onClick={() => { props.handleActiveOn(props.monument.id) }}>   Check photo</span></h3>
                <p>{props.monument.description}</p>
            </li>
            {props.monument.active
                ? <div className="picture">
                    <img src={props.monument.picture} alt="dsa" />
                    <button onClick={() => { props.handleActiveOff(props.monument.id) }}>X</button>
                </div>
                : null
            }
        </>
    )
}
export default MonumentItem