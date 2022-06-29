import RadiusItem from "./RadiusItem";

function Radius(props) {
    const radius = props.radius
    const radius__items = radius.map((radiusItem, key) => {
        return (
            <RadiusItem 
                key={key}
                styles={radiusItem.styles}
                label={radiusItem.label}
            />
        );
    })
    return (
        <div className="radius__collection">
            {radius__items}
        </div>
    )
}
export default Radius