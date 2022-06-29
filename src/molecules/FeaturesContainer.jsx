import ExtractClassAndPropertiesFromCSS from "../components/Helpers/ExtractClassAndPropertiesFromCSS"
import Topic from "../components/Topic"

function FeaturesContainer(props) {
    const spacingController = "spacing"
    const radiusController = "radius"
    const topics = props.topics
    return (
        <section className="section__spacing">
            <div className="container">
                <Topic title={topics.spacing} />
                <ExtractClassAndPropertiesFromCSS 
                    styleguide={props.styleguideSpaces}
                    component={spacingController}
                />
                <Topic title={topics.radius} />
                <ExtractClassAndPropertiesFromCSS 
                    styleguide={props.styleguideRadius}
                    component={radiusController}
                />
            </div>
        </section>
    )
}
export default FeaturesContainer