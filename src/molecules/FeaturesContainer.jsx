import Radius from "../components/Features/Radius"
import Spacing from "../components/Features/Spacing"

function FeaturesContainer(props) {
    return (
        <section className="section__spacing">
            <div className="container">
                <Radius  radius={props.radius} />
                <Spacing spaces={props.spaces} />
            </div>
        </section>
    )
}
export default FeaturesContainer