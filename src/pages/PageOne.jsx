import prefaceApi from '../api/demo/preface.styleguide.api'
import headersApi from '../api/demo/headers.styleguide.api'
import palettesApi from '../api/demo/palettes.styleguide.api'
import typographyApi from "../api/demo/typography.styleguide.api"
import featuresApi from "../api/demo/features.styleguide.api"
import rulesApi from "../api/demo/rules.styleguide.api"

import Styleguide from '../pages/Styleguide'

import rulesCSS from '../css/demo/rules.css'
import paletteCSS from '../css/demo/palette.css'
import typographyCSS from '../css/demo/typography.css'
import fontsCSS from '../css/demo/fonts.css'
import spacingCSS from '../css/demo/spacing.css'
import radiusCSS from '../css/demo/radius.css'

function PageOne() {
    return (
        <Styleguide preface={prefaceApi} 
            headers={headersApi} 
            palettes={paletteCSS}
            typeScale={typographyCSS}
            fonts={fontsCSS}
            features={featuresApi}
            spacing={spacingCSS}
            radius={radiusCSS}
            rules={rulesCSS}
        />
    )
}

export default PageOne