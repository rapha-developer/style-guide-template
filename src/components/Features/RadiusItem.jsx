
function RadiusItem(props) {
    return (
        <div className="radius__item">
            <div className="radius__sample" 
                style={props.styles}></div>
            <h5 className="radius__unit">{props.label}</h5>
        </div>
    )
}
export default RadiusItem