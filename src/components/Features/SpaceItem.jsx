
function SpaceItem(props) {
    return (
        <div className="spacing__item">
            <h4 className="spacing__pixels">{props.pixels}</h4>
            <div className="spacing__graphic" 
                style={props.styles}></div>
            <p className="spacing__rems">{props.rem}</p>
        </div>
    )
}
export default SpaceItem