import prefaceApi from '../api/demo/preface.styleguide.api'
import headersApi from '../api/demo/headers.styleguide.api'
import palettesApi from '../api/demo/palettes.styleguide.api'
import typographyApi from "../api/demo/typography.styleguide.api"
import featuresApi from "../api/demo/features.styleguide.api"
import rulesApi from "../api/demo/rules.styleguide.api"

import Styleguide from '../pages/Styleguide'
import rulesCSS from '../css/demo/rules.css'

function PageOne() {
    return (
        <Styleguide preface={prefaceApi} 
            headers={headersApi} 
            palettes={palettesApi}
            typography={typographyApi}
            features={featuresApi}
            rules={rulesCSS}
        />
    )
}

export default PageOne