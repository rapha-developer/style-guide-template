import Header from "../components/Header"
import Preface from "../components/Preface"
import FeaturesContainer from "../molecules/FeaturesContainer"
import PaletteContainer from "../molecules/PaletteContainer"
import TypographyContainer from "../molecules/TypographyContainer"
import RulesContainer from "../molecules/RulesContainer"

import '../css/fonts/demo.fonts.css'

function Styleguide(props) {
    return (
        <div className="styleguide">
            <Preface
                subtitle={props.preface.subtitle}  
                title={props.preface.title}
            />
            {props.headers.color && <Header title={props.headers.color} /> }
            <PaletteContainer styleguide={props.palettes} />

            {props.headers.typography && <Header title={props.headers.typography} /> }
            <TypographyContainer 
                fonts={props.typography.fontFamilies}
                typographyScales={props.typography.fontSizes}
                weights={props.typography.weights}
            />
            <RulesContainer styleguide={props.rules}
                            weights={props.typography.weights.data}
                            headlineText={props.headers.headlines.rules}
            />
            {props.headers.spacing && <Header title={props.headers.spacing} /> }
            <FeaturesContainer 
                spaces={props.features.spacing}
                radius={props.features.borderRadius}
            />
            {props.headers.component && <Header title={props.headers.component} /> }

        </div>
    )
}
export default Styleguide