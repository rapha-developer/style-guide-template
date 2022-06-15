
function Color(props) {
    
    return (
        <div className="color">
            <div className="color__bg" style={{backgroundColor: props.hex}}></div>
            <p className="color__hex">{props.hex}</p>
            <p className="color__rgb">{props.hsl}</p>
        </div>
    )
}
export default Color