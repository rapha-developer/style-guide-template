import Fonts from '../components/Fonts/Family/Fonts'
import TypographyScale from '../components/Fonts/TypographyScale'
import WeightsTimeline from '../components/Fonts/WeightsTimeline'

import weights from '../api/weights.styleguide'

function TypographyContainer(props) {
    return (
        <section className="section__typography">
            <div className="container">
                <Fonts fonts={props.fonts} />
                <TypographyScale tabs={props.typographies} />
                <WeightsTimeline timeline={weights} />
            </div>
        </section>
    )
}
export default TypographyContainer