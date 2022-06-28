import Topic from "../../Topic";
import FontItem from "./FontItem";

function Fonts(props) {
    const fontFamilies = props.fonts

    const font__items = fontFamilies.map((fontItem, key) => {
        return (
            <FontItem 
                key={key}
                styles={fontItem.styles}
                text={fontItem.text}
                name={fontItem.name}
                variable={fontItem.variable}
            />
        );
    });
    return (
        <div className="fonts__wrapper">
            <Topic title="font families" />
            <div className="fonts">
                {font__items}
            </div>
        </div>
    )
}
export default Fonts