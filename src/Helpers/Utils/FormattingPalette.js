
class FormattingPalette {
    constructor(Palettes) {
        this.palettes = []
        this.main(Palettes.rules)
    }
    main(Rules) {
        const zero = 0;
        const next = 1;
        const jumpTwo = 2;
        for (let item = zero; item < Rules.length; item++) {
            const colors = []
            for(let colorItem = zero; colorItem < Rules[item].data.length; colorItem+= jumpTwo) {
                const copyFromColors = Object.assign(colors)
                copyFromColors.push(makeColor(
                    Rules[item].data[colorItem].value,
                    Rules[item].data[colorItem+next].value 
                ));
            }
            const copyFromPalettes = Object.assign(this.palettes)
            copyFromPalettes.push(generatePalette(Rules[item].class, colors))
        }
        function makeColor(hex, hsl) {
            return {
                hex: hex,
                hsl: hsl
            }
        }
        function generatePalette(palette__name, colors) {
            return {
                palette__name: palette__name,
                colors: colors
            }
        }
    }
}
export default FormattingPalette