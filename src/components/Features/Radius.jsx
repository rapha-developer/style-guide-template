
function Radius(props) {
    const property = props.property
    const radius = props.radius;
    const radiusItems = radius.map((radiusItem, key) => {
        const styles = {}
        styles[property] = radiusItem.unit
        return (
            <div className="radius__item" key={key}>
                <div className="radius__sample" 
                    style={styles}></div>
                <h5 className="radius__unit">{radiusItem.label}</h5>
            </div>
        )
    })
    return (
        <div className="radius__collection">
            {radiusItems}
        </div>
    )
}
export default Radius