import Topic from "../Topic";

function WeightsTimeline(props) {
    const dataTimeline = props.timeline;

    const progressItems = dataTimeline.data.map((progressItem, key) => {
        const firstItem = 0;
        const lastItem = dataTimeline.data.length - 1;

        const removeBgInFirst = (firstItem === key ) ? "progress__line--transparent" : ""; 
        const removeBgInLast = (lastItem === key ) ? "progress__line--transparent" : ""; 
        const styles = {}
        styles[dataTimeline.property] = progressItem.unit
        return (
            <div className="progress__item" key={key}>
                <span className="progress__unit">{progressItem.unit}</span>
                <h6 className="progress__label capitalize"
                    style={styles}>{progressItem.label}</h6>
                <div className="progress__bar">
                    <span className={`progress__line ${removeBgInFirst}`}></span>
                    <div className="progress__dot"></div>
                    <span className={`progress__line ${removeBgInLast}`}></span>
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