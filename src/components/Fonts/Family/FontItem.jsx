
function FontItem(props) {
    return (
        <div className="font__item">
            <h4 className="font__sample"
                style={props.styles}>{props.text}</h4>
            <div className="font__info">
                <h5 className="font__name capitalize">{props.name}</h5>
                <p className="font__var">{props.variable}</p>
            </div>
        </div>
    )
}
export default FontItem