import FontFamilies from "../components/Fonts/FontFamilies"
import TypographyScale from "../components/Fonts/TypographyScale"
import WeightsTimeline from "../components/Fonts/WeightsTimeline"

function TypographyContainer(props) {
    return (
        <section className="section__typography">
            <div className="container">
                <FontFamilies fonts={props.fonts}/>
                <TypographyScale tabs={props.typographyScales} />
                <WeightsTimeline timeline={props.weights} />
            </div>
        </section>
    )
}
export default TypographyContainer