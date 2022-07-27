
class FormattingSpacing {
    constructor(Spaces) {
        this.spacing = []
        this.main(Spaces.rules)
    }
    main(spaces) {
        for (let item = 0; item < spaces.length; item++) {
            const className = spaces[item].class
            for (let property = 0; property < spaces[item].data.length; property++) {
                
                const copyFromSpacing = Object.assign(this.spacing)
                copyFromSpacing.push(
                    generateSpacing(
                        spaces[item].data[property].label,
                        spaces[item].data[property].value)
                )
            }
        }
        function generateSpacing(property, pixels) {
            const rem = removeFirstCharacter(pixelsToRem(pixels))
            const styles = {}
            styles[property] = pixels
            return {
                pixels: pixels,
                rem: rem,
                styles: styles
            }
        }
        function pixelsToRem(pixels) {
            return (parseInt(pixels) / 16) + " rem"
        }
        function removeFirstCharacter(expression) {
            const removeCharacter = isFirstCharacterZero(expression)
            if (removeCharacter) {
                return expression.toString().slice(1)
            }
            return expression
        }
        function isFirstCharacterZero(expression) {
            const zero = "0"
            return ( expression.toString().substring(0, 1) === zero ) ? true : false
        }
    }
}
export default FormattingSpacing