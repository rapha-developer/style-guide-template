import Header from "../components/Header";
import Preface from "../components/Preface";

import Extract from '../Helpers/Extract'
import FormattingPalette from "../Helpers/Utils/FormattingPalette";
import FormattingFonts from "../Helpers/Utils/FormattingFonts";
import FormattingTypeScale from "../Helpers/Utils/FormattingTypeScale";
import FormattingRadius from "../Helpers/Utils/FormattingRadius";
import FormattingSpacing from "../Helpers/Utils/FormattingSpacing";

import FeaturesContainer from "../molecules/FeaturesContainer";
import PaletteContainer from "../molecules/PaletteContainer";
import TypographyContainer from '../molecules/TypographyContainer'

function Styleguide(props) {
    const palettes = new Extract(props.palettes)
    const fonts = new Extract(props.fonts)
    const radius = new Extract(props.radius)
    const spacing = new Extract(props.spacing)
    const typeScale = new Extract(props.typeScale)

    const formattingPalette = new FormattingPalette(palettes)
    const formattingTypography = new FormattingTypeScale(typeScale)
    const formattingFonts = new FormattingFonts(fonts)
    const formattingRadius = new FormattingRadius(radius)
    const formattingSpaces = new FormattingSpacing(spacing) 

    return (
        <div className="styleguide">
            <Preface
                subtitle={props.preface.subtitle} 
                title={props.preface.title} 
            />
            {props.headers.color && <Header title={props.headers.color} /> }
            <PaletteContainer 
                palettes={formattingPalette.palettes}
            />

            {props.headers.typography && <Header title={props.headers.typography} /> }
            <TypographyContainer 
                fonts={formattingFonts.fonts}
                typographies={formattingTypography.typographies}
            />

            <div style={{marginBlock: "6rem"}}></div>

            {props.headers.spacing && <Header title={props.headers.spacing} /> }
            <FeaturesContainer 
                radius={formattingRadius.radius}
                spaces={formattingSpaces.spacing}
            />

            {props.headers.component && <Header title={props.headers.component} /> }

        </div>
    )
}
export default Styleguide