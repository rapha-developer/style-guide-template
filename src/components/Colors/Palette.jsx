import Color from "./Color";

function Palette(props) {
    
    const colorData = props.palette
    const paletteData = colorData.map((color) => {
        return (
            <Color key={color.hex}
                hex={color.hex}
                hsl={color.hsl}
            />
        );
    });
    return (
        <div className="palette">
            {paletteData}
        </div>
    )
}
export default Palette