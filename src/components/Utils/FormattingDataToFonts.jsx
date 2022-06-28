import { useState } from "react";
import Fonts from "../Fonts/Family/Fonts";

function FormattingDataToFonts(props) {
    const [fontsCollection, setFontsCollection] = useState([])
    const fontFamilies = props.rules;
    const rulesModel = {
        name: "ff__rule",
        variable: "var__rule",
        styles: {
            property: "fontFamily"
        },
    }
    fontFamilies.map((familyItem) => {
        var fontName = ""
        var variable = ""
        familyItem.data.map((attribute) => {
            const isFontName = (attribute.label === rulesModel.name) ? true : false;
            const isVariable = (attribute.label === rulesModel.variable) ? true : false;

            if(isFontName) { fontName = attribute.value }
            if(isVariable) { variable = attribute.value }

        });
        const newFontFamily = generateFontFamilyObject(fontName, variable)
        const copyFromFontsCollection = Object.assign(fontsCollection)
        copyFromFontsCollection.push(newFontFamily)

    });
    function generateFontFamilyObject(fontName, variable) {
        const text = `This is a ${fontName} family`;
        const styles = {}
        styles[rulesModel.styles.property] = fontName
        return {
            text: text,
            name: fontName,
            variable: variable,
            styles: styles
        }
    }
    return (
        <Fonts fonts={fontsCollection}/>
    )
}
export default FormattingDataToFonts