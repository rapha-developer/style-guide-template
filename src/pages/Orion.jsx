import prefaceApi from '../api/orion/preface.styleguide.api'
import headersApi from '../api/demo/headers.styleguide.api'
import typographyApi from '../api/orion/typography.styleguide.api'
import palettesApi from '../api/orion/palettes.styleguide.api'

import featuresApi from '../api/demo/features.styleguide.api'
import rulesApi from '../api/demo/rules.styleguide.api'

import Styleguide from './Styleguide'

function Orion() {
    return (
        <Styleguide
            preface={prefaceApi}
            headers={headersApi}
            palettes={palettesApi}
            typography={typographyApi}
            features={featuresApi}
            rules={rulesApi}
        />
    )
}
export default Orion