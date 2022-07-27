import Radius from "../components/Features/Radius"
import Spacing from "../components/Features/Spacing"
import Topic from "../components/Topic"

function FeaturesContainer(props) {
    return (
        <section className="section__spacing">
            <div className="container">
                <Topic title={props.topics.spacing} />
                <Spacing spaces={props.spaces} />
                <Topic title={props.topics.radius} />
                <Radius  radius={props.radius} />
            </div>
        </section>
    )
}
export default FeaturesContainer