import Palette from "./Palette"
import Topic from "../Topic"

function PalettesCollection(props) {
    const paletteData = props.palettes
    const colors__items = paletteData.map((paletteItem, key) => {
        return (
            <div className="colors__item" key={key}>
                <Topic title={paletteItem.palette__name} />
                <Palette palette={paletteItem.colors} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="colors__collection">
                {colors__items}
            </div>
        </div>
    )
}
export default PalettesCollection