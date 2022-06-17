import Radius from "../components/Features/Radius"
import Spacing from "../components/Features/Spacing"
import Topic from "../components/Topic"

function FeaturesContainer(props) {
    return (
        <section className="section__spacing">
            <div className="container">
                <Topic title={props.spaces.title} />
                <Spacing spaces={props.spaces.data} />
                <Topic title={props.radius.title} />
                <Radius radius={props.radius.data} property={props.radius.property}/>
            </div>
        </section>
    )
}
export default FeaturesContainer