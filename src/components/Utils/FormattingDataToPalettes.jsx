import { useState } from "react";
import PalettesCollection from "../Colors/PalettesCollection";

function FormattingDataToPalettes(props) {
    const [palettesCollection, setPalettesCollection] = useState([]);

    const rules = props.rules
    const rulesModel = {
        name: "topic__rule",
        colors: {
            clr__rule: "clr__rule",
            hsl__rule: "hsl__rule",
        },
        keys: {
            hex: "hex",
            hsl: "hsl"
        }
    }
    rules.forEach((elementPalette) => {
        const objectPalette = generatePaletteObject()
        var paletteName = ""
        var color = {}
        elementPalette.data.map((attribute) => {
            const isPaletteName = (attribute.label === rulesModel.name) ? true : false;
            if (isPaletteName) {
                objectPalette.palette__name = attribute.value
            }
            const isColorHex = (attribute.label === rulesModel.colors.clr__rule) ? true : false;
            if (isColorHex) {
                color[rulesModel.keys.hex] = attribute.value;
            }

            const isColorHsl = (attribute.label === rulesModel.colors.hsl__rule) ? true : false;
            if (isColorHsl) {
                color[rulesModel.keys.hsl] = attribute.value
                objectPalette.colors.push(color)
                color = {}
            }
        });
        const copyFromPalettesCollection = Object.assign(palettesCollection)
        copyFromPalettesCollection.push(objectPalette)
    });
    function generatePaletteObject() {
        return {
            palette__name: "",
            colors: []
        }
    }
    return (
        <PalettesCollection 
            palettes={palettesCollection}
        />
    )
}
export default FormattingDataToPalettes