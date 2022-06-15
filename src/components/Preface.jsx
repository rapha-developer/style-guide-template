
function Preface(props) {

    return (
        <div className="preface">
            <span className="preface__circle"></span>
            <div className="container">
                <div className="preface__content">
                    <h2 className="preface__name capitalize">{props.subtitle}</h2>
                    <h1 className="preface__title capitalize">{props.title}</h1>
                </div>
            </div>
        </div>
    )
}
export default Preface