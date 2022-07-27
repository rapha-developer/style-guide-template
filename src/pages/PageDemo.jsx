
import paletteCSS from '../css/demo/palette.css'
import fontsCSS from '../css/demo/fonts.css'
import radiusCSS from '../css/demo/radius.css'
import spacingCSS from '../css/demo/spacing.css'
import typeScaleCSS from '../css/demo/typography.css'

import MakePreface from '../api/preface.styleguide'
import headersConfig from '../api/headers.styleguide'
import Styleguide from './Styleguide'

import '../css/fonts/demo.fonts.css'

function PageDemo(props) {
    const prefaceAttributes = MakePreface()

    return (
        <Styleguide
            preface={prefaceAttributes}
            headers={headersConfig} 
            palettes={paletteCSS}
            fonts={fontsCSS}
            typeScale={typeScaleCSS}
            spacing={spacingCSS}
            radius={radiusCSS}
        />
    )
}

export default PageDemo