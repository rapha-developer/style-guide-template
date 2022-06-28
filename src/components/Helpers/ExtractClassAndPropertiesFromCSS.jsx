import { useState } from 'react'
import FormattingDataToAccordions from '../Utils/FormattingDataToAccordions';
import FormattingDataToPalettes from '../Utils/FormattingDataToPalettes';
import FormattingDataToTypeScale from '../Utils/FormattingDataToTypeScale';
import FormattingDataToFonts from '../Utils/FormattingDataToFonts';

function ExtractClassAndPropertiesFromCSS(props) {
    const styleguide = props.styleguide
    const componentTYPE = props.component
    const componentsModel = {
        accordion: "accordion",
        palette: "palette",
        typeScale: "typeScale",
        fonts: "fonts"
    }
    const REGEX_EXPRESSION = /(?:(rules-[^{]+)\s{\s\n|\n).{2,4}--([a-zA-Z_]{1,}):\s([^;]+);/g;
    const resultsAfterRegex = [...styleguide.matchAll(REGEX_EXPRESSION)];

    const [rulesToFormat, setRulesToFormat] = useState([])
    resultsAfterRegex.forEach(mapAllResults)
    function mapAllResults(elements, index) {
        const positionClass = 1;
        const positionLabel = 2;
        const positionValue = 3;
        const copyFromResultsFormatted = Object.assign(rulesToFormat);

        const hasClass = (elements[positionClass]) ? true : false;
        if (hasClass) {
            copyFromResultsFormatted.push(generateExtractObject(elements[positionClass]))
        }
        const copyLength = (copyFromResultsFormatted.length - positionClass)       
        copyFromResultsFormatted[copyLength].data.push(
            generatePropertiesToExtractObject(elements[positionLabel], elements[positionValue])
        )
    }
    function generatePropertiesToExtractObject(label, value) {
        return {
            label:label,
            value: value,
        }
    }
    function generateExtractObject(className) {
        return {
            class: className,
            data: [], 
        }
    }
    const [rulesCompleted, setRulesCompleted] = useState(rulesToFormat)
    const isComponentAccordion = (componentTYPE === componentsModel.accordion) ? true : false;
    const isComponentPalette = (componentTYPE === componentsModel.palette) ? true : false;
    const isComponentTypeScale = (componentTYPE === componentsModel.typeScale) ? true : false;
    const isComponentFonts = (componentTYPE === componentsModel.fonts) ? true : false;

    return (
        <div>
            {isComponentAccordion && <FormattingDataToAccordions 
                                        rules={rulesCompleted}
                                        weights={props.weights} />
            }
            {isComponentPalette && <FormattingDataToPalettes 
                                        rules={rulesCompleted}  /> 
            }
            {isComponentTypeScale && <FormattingDataToTypeScale 
                                        rules={rulesCompleted}  /> 
            }
            {isComponentFonts && <FormattingDataToFonts 
                                        rules={rulesCompleted}  />}
        </div>
        
    );
}
export default ExtractClassAndPropertiesFromCSS