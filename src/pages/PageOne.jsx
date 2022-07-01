import headersConfig from '../docs/utils/headers.styleguide'
import MakePreface from '../docs/utils/preface.styleguide'

import paletteCSS from '../docs/themes/demo/palette.css'
import fontsCSS from '../docs/themes/demo/fonts.css'
import typeScaleCSS from '../docs/themes/demo/typeScale.css'
import rulesCSS from '../docs/themes/demo/rules.css'
import spacingCSS from '../docs/themes/demo/spacing.css'
import radiusCSS from '../docs/themes/demo/radius.css'

import Styleguide from '../pages/Styleguide'

function PageOne() {
    const prefaceAttributes = MakePreface()
    return (
        <Styleguide preface={prefaceAttributes} 
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

export default PageOne