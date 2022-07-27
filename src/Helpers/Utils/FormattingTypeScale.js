
class FormattingTypeScale {
    constructor(Typographies) {
        this.typographies = []
        this.main(Typographies.rules)
    }
    main(typography) {
        const zero = 0;
        const next = 1;
        const jumpTwo = 2;

        for(let item = zero; item < typography.length; item++) {
            const className = typography[item].class
            for (let propertyItem = zero; 
                    propertyItem < typography[item].data.length; 
                    propertyItem+= jumpTwo) {

                const copyFromTypographies = Object.assign(this.typographies)
                copyFromTypographies.push(makeTypeScale(
                    className, 
                    typography[item].data[propertyItem].label,
                    typography[item].data[propertyItem].value,
                    typography[item].data[propertyItem+next].value
                ));
            }
        }
        function makeTypeScale(name, propertyCSS, propertyValue, varName) {
            const property = (propertyCSS === "font-size") ? "fontSize" : "Property not found"
            const description = `${propertyCSS}: ${propertyValue}`
            const styles = {}
            styles[property] = propertyValue
            return {
                name: name,
                variable: varName,
                description: description,
                styles: styles
            }
        }
    }
}
export default FormattingTypeScale