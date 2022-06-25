
function AccordionItem(props) {
    const isActive = (props.isActive) ? "active" : ""
    return (
        <div className="accordion__item">
            <button className={`accordion capitalize ${isActive}`}
                    onClick={props.changeItem}>{props.title}</button>
            <div className="panel">
                <h2 className="panel__example"
                    style={props.styles}>This is a text AaBbCcDd</h2>
            </div>
        </div>
    )
}
export default AccordionItem