import PalettesCollection from "../components/Colors/PalettesCollection"

function PaletteContainer(props) {
    return (
        <section className="section__colors">
            <PalettesCollection palettes={props.palettes} />
        </section>
    )
}
export default PaletteContainer