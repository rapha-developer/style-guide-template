import ExtractClassAndPropertiesFromCSS from "../components/Helpers/ExtractClassAndPropertiesFromCSS"
import WeightsTimeline from "../components/Fonts/WeightsTimeline"

function TypographyContainer(props) {
    const componentTypeScaleController = "typeScale"
    const componentFontsController = "fonts"

    return (
        <section className="section__typography">
            <div className="container">
                <ExtractClassAndPropertiesFromCSS 
                    styleguide={props.styleguideFonts}
                    component={componentFontsController}
                />
                <ExtractClassAndPropertiesFromCSS
                    styleguide={props.styleguideTypeScale}
                    component={componentTypeScaleController}
                />
                <WeightsTimeline timeline={props.weights} />
            </div>
        </section>
    )
}
export default TypographyContainer