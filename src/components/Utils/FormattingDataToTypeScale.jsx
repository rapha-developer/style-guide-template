import { useState } from "react";
import TypographyScale from "../Fonts/TypographyScale";

function FormattingDataToTypography(props) {
    const [typeScaleCollection, setTypeScaleCollection] = useState([])
    const typeScaleRules = props.rules
    const rulesModel = {
        name: "fc__rule",
        variable: "var__rule",
        styles: {
            rule: "fs__rule",
            property: "fontSize"
        },
    }
    typeScaleRules.forEach((typeScaleItem) => {
        var name = ""
        var variable = ""
        const styles = {}
        typeScaleItem.data.forEach((attribute) => {
            const isName = (attribute.label === rulesModel.name) ? true : false;
            const isVariable = (attribute.label === rulesModel.variable) ? true : false;
            const isStyleRule = (attribute.label === rulesModel.styles.rule) ? true : false;

            if (isName) { name = attribute.value }
            if (isVariable) { variable = attribute.value }
            if (isStyleRule) { styles[rulesModel.styles.property] = attribute.value }
        });
        const newTypeScale = generateTypeScaleObject(name, variable, styles);
        const copyFromTypeScaleCollection = Object.assign(typeScaleCollection);
        copyFromTypeScaleCollection.push(newTypeScale);
    });
    function generateTypeScaleObject(name, variable, styles) {
        const description = `${rulesModel.styles.property}: ${styles[rulesModel.styles.property]}`
        return {
            name: name,
            variable: variable,
            description: description,
            styles: styles 
        }
    }

    return (
        <TypographyScale tabs={typeScaleCollection} />
    );
}
export default FormattingDataToTypography