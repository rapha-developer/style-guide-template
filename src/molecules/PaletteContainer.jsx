import ExtractClassAndPropertiesFromCSS from "../components/Helpers/ExtractClassAndPropertiesFromCSS";

function PaletteContainer(props) {
    const componentController = "palette"

    return (
        <section className="section__colors">
            <ExtractClassAndPropertiesFromCSS
                styleguide={props.styleguide}
                component={componentController}
            />
        </section>
    );
}
export default PaletteContainer