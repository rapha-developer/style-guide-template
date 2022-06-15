
function Spacing(props) {

    const spaces = props.spaces
    const spaceItems = spaces.map((spaceItem, key) => {
        const REM = "rem"
        const PX = "px"
        const propertyHeight = spaceItem.rem + REM
        const styles = {height: propertyHeight}
        return (
            <div className="spacing__item" key={key}>
                <h4 className="spacing__pixels">{spaceItem.pixels}{PX}</h4>
                <div className="spacing__graphic" style={styles}></div>
                <p className="spacing__rems">{spaceItem.rem} {REM}</p>
            </div>
        );
    })
    return (
        <div className="spacing__collection">
            {spaceItems}
        </div>
    );
}
export default Spacing