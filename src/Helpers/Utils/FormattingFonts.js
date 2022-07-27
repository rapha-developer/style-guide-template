
class FormattingFonts {
    constructor(Fonts) {
        this.fonts = []
        this.main(Fonts.rules)

    }
    main(fonts) {
        const firstPos = 0
        for (let item = firstPos; item < fonts.length; item++) {

            const copyFromFonts = Object.assign(this.fonts)
            copyFromFonts.push(generateFont(
                fonts[item].class, 
                fonts[item].data[firstPos].label, 
                fonts[item].data[firstPos].value
            ));
        }
        function generateFont(fontName, propertyCSS, variable) {
            const text = `This is a ${fontName} family`;
            const property = (propertyCSS === "font-family") ? "fontFamily" : "Property not found"
            const styles = {}
            styles[property] = fontName
            return {
                text: text,
                name: fontName,
                variable: variable,
                styles: styles
            }
        }
    }
}
export default FormattingFonts