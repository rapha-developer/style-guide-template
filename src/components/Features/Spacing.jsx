import SpaceItem from "./SpaceItem";

function Spacing(props) {
    const spaces = props.spaces
    const space__items = spaces.map((spaceItem, key) => {
        return (
            <SpaceItem 
                key={key}
                pixels={spaceItem.pixels}
                styles={spaceItem.styles}
                rem={spaceItem.rem}
            />
        );
    });
    return (
        <div className="spacing__collection">
            {space__items}
        </div>
    )
}
export default Spacing