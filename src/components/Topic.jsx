
function Topic(props) {
    const title = props.title
    return (
        <div className="topic">
            <h4 className="topic__title uppercase">{title}</h4>
        </div>
    )
}
export default Topic