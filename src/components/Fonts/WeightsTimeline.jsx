import Topic from "../Topic";

function WeightsTimeline(props) {
    const dataTimeline = props.timeline;

    const progressItems = dataTimeline.data.map((progressItem, key) => {
        const firstItem = 0;
        const lastItem = dataTimeline.data.length - 1;

        const removeBgInFirst = (firstItem === key ) ? "timeline__line--transparent" : ""; 
        const removeBgInLast = (lastItem === key ) ? "timeline__line--transparent" : ""; 
        const styles = {}
        styles[dataTimeline.property] = progressItem.unit
        return (
            <div className="timeline__item" key={key}>
                <span className="timeline__unit">{progressItem.unit}</span>
                <h6 className="timeline__label capitalize"
                    style={styles}>{progressItem.label}</h6>
                <div className="timeline__bar">
                    <span className={`timeline__line ${removeBgInFirst}`}></span>
                    <div className="timeline__dot"></div>
                    <span className={`timeline__line ${removeBgInLast}`}></span>
                </div>
            </div>
        )
    })
    return (
        <div className="time">
            <Topic title="weight palette" />
            <div className="timeline__progress">
                {progressItems}
            </div>
        </div>
    )
}
export default WeightsTimeline