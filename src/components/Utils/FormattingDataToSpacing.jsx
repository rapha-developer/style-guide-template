import { useState } from "react"
import Spacing from "../Features/Spacing";

function FormattingDataToSpacing(props) {
    const [spacingCollection, setSpacingCollection] = useState([])
    const rules = props.rules
    const rulesModel = {
        name: "spc__rule",
        styles: {
            property: "height"
        },
    }
    rules.map((ruleItem) => {
        var pixels = ""
        var rem = ""
        ruleItem.data.map((attribute) => {
            pixels = attribute.value
            rem = pixelsToRem(attribute.value)
        });
        const newSpaceItem = generateSpacingObject(pixels, rem)
        const copyFromSpacingCollection = Object.assign(spacingCollection)
        copyFromSpacingCollection.push(newSpaceItem)
    });

    function pixelsToRem(pixels) {
        const onlyNumbers = pixels.replace(/\D/g, "");
        const base = 16
        const multiply = parseFloat(onlyNumbers / base )

        var response = multiply
        if (firstCharacterIsZero(multiply)) {
            response = removeFirstCharacter(multiply)
        }
        return `${response} rem`
    }
    function firstCharacterIsZero(expression) {
        const zero = "0"
        return ( expression.toString().substring(0, 1) === "0" ) ? true : false
    }
    function removeFirstCharacter(expression) {
        return expression.toString().slice(1)
    }
    function generateSpacingObject(pixels, rem) {
        const styles = {}
        styles[rulesModel.styles.property] = pixels
        return {
            pixels: pixels,
            rem: rem,
            styles: styles
        }
    }
    return (
        <Spacing spaces={spacingCollection} />
    )
}
export default FormattingDataToSpacing