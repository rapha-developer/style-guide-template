import { useState } from "react";
import Radius from "../Features/Radius";

function FormattingDataToRadius(props) {
    const [radiusCollection, setRadiusCollection] = useState([])
    const rules = props.rules
    const rulesModel = {
        name: "fc__rule",
        border: "bd__rule",
        styles: {
            property: "borderRadius"
        },
    }
    rules.map((ruleItem) => {
        var label = ""
        var unit = ""
        ruleItem.data.map((attribute) => {
            const isNameAttribute = (attribute.label === rulesModel.name) ? true : false;
            const isBorderAttribute = (attribute.label === rulesModel.border) ? true : false;
            if(isNameAttribute) { label = attribute.value }
            if(isBorderAttribute) { unit = attribute.value }
        });
        const newRadiusObject = generateRadiusObject(label, unit)
        const copyFromRadiusCollection = Object.assign(radiusCollection)
        copyFromRadiusCollection.push(newRadiusObject)
    });
    function generateRadiusObject(label, unit) {
        const styles = {}
        styles[rulesModel.styles.property] = unit
        return {
            label: label,
            unit: unit,
            styles: styles
        }
    }
    return (
        <Radius radius={radiusCollection} /> 
    )
}
export default FormattingDataToRadius