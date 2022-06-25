import { useState } from 'react'
import AccordionRules from '../Rules/AccordionRules'

function FormattingDataToAccordions(props) {
    const rules = props.rules
    const weights = props.weights
    
    const rulesModel = {
        element: "fc__rule",
        styles: [
            {
                rule: "ff__rule",
                property: "fontFamily"
            },
            {
                rule: "fs__rule",
                property: "fontSize"
            },
            {
                rule: "fw__rule",
                property: "fontWeight"
            },
            {
                rule: "letter__rule",
                property: "letterSpacing"
            }
        ]
    }
    const [accordions, setAccordions] = useState([])
    rules.forEach((elementObject) => {
        const styles = {}
        var elementName = ""
        elementObject.data.map((attribute) => {
            if (attribute.label === rulesModel.element) { elementName = attribute.value }
            if (attribute.label !== rulesModel.element) { 
                const resultsAfterFind = rulesModel.styles.find((ruleItem) => {
                    if(ruleItem.rule === attribute.label) {
                        return ruleItem
                    }
                });
                styles[resultsAfterFind.property] = attribute.value
            }
        });
        const title = generateAccordionTitle(elementName, styles)
        const copyFromAccordions = Object.assign(accordions)
        copyFromAccordions.push(generateAccordionObject(elementName, title, styles));
    });
    function generateAccordionTitle(elementName, styles) {
        const { fontFamily, fontSize, fontWeight, letterSpacing } = styles;
        const foundWeight = weights.find((weightItem) => {
            if(weightItem.unit === Number(fontWeight)) {
                return weightItem
            }
        });
        const letterTitle = `letter: ${letterSpacing}`
        const fragments = [elementName, fontFamily, foundWeight.label, fontSize, letterTitle];
        return fragments.join(' - ')
    }
    function generateAccordionObject(elementName, title, styles) {
        return {
            element: elementName,
            title: title,
            styles: styles
        }
    }

    return (
        <AccordionRules accordions={accordions} />
    )
}
export default FormattingDataToAccordions