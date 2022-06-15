import Palette from "../components/Colors/Palette";
import Topic from "../components/Topic";

function PaletteContainer(props) {
    const paletteData = props.palettes
    const colorsItems = paletteData.map((paletteItem, key) => {
        return (
            <div className="colors__item" key={key}>
                <Topic title={paletteItem.palette__name} />
                <Palette palette={paletteItem.colors} />
            </div>
        );
    })
    return (
        <div className="section__colors">
            <div className="container">
                <div className="colors__collection">
                    {colorsItems}
                </div>
            </div>
        </div>
    )
}
export default PaletteContainer