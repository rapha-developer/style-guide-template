
function Headline(props) {
    const text = props.text
    const hashtag = "#"
    return (
        <div className="headline">
            <div className="container">
            <div className="headline__body">
                <span>{hashtag}</span>
                <div className="headline__text uppercase">{text}</div>
            </div>
            <div className="headline__shadow"></div>
            </div>
        </div>
    )
}
export default Headline