import headersConfig from '../docs/utils/headers.styleguide'
import MakePreface from '../docs/utils/preface.styleguide'

import paletteCSS from '../docs/themes/orion/palette.css'
import fontsCSS from '../docs/themes/orion/fonts.css'
import typeScaleCSS from '../docs/themes/orion/typeScale.css'
import rulesCSS from '../docs/themes/orion/rules.css'
import spacingCSS from '../docs/themes/demo/spacing.css'
import radiusCSS from '../docs/themes/demo/radius.css'

import Styleguide from './Styleguide'

import '../css/fonts/orion.fonts.css'

function Orion() {
    const prefaceAttributes = MakePreface("orion")
    return (
        <Styleguide
            preface={prefaceAttributes}
            headers={headersConfig}
            palettes={paletteCSS}
            fonts={fontsCSS}
            typeScale={typeScaleCSS}
            rules={rulesCSS}
            spacing={spacingCSS}
            radius={radiusCSS}
        />
    )
}
export default Orion