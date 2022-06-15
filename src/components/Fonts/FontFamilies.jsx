import Topic from "../Topic";

function FontFamilies(props) {
    const fontFamilies = props.fonts;

    const font__items = fontFamilies.data.map((fontItem, key) => {
        const styles = {}
        styles[fontFamilies.property] = fontItem.name
        const TEXT = `This is a ${fontItem.name} family`;
        const VARIABLE = `--ff__${fontItem.name}`
        return (
            <div className="font__item" key={key}>
                <h4 className="font__sample"
                    style={styles} >{TEXT}</h4>
                <div className="font__info">
                    <h5 className="font__name capitalize">{fontItem.name}</h5>
                    <p className="font__var">{VARIABLE}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="fonts__wrapper">
            <Topic title="font families" />
            <div className="fonts">
                {font__items}
            </div>
        </div>
    )
}
export default FontFamilies