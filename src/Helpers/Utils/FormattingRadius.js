
class FormattingRadius {
    constructor(Radius) {
        this.radius = []
        this.main(Radius.rules)
    }
    main(radius) {
        for (let item = 0; item < radius.length; item++) {
            const labelName = radius[item].class
            for (let property = 0; property < radius[item].data.length; property++) {
                
                const copyFromRadius = Object.assign(this.radius)
                copyFromRadius.push(generateRadius(
                    labelName,
                    radius[item].data[property].label,
                    radius[item].data[property].value));
            }
            
        }
        function generateRadius(label, property, unit) {
            const propertyName = (property === "border-radius") ? "borderRadius" : "Property Not Found"
            const styles = {}
            styles[propertyName] = unit
            return {
                label: label,
                unit: unit,
                styles: styles
            }
        }
    }
}
export default FormattingRadius