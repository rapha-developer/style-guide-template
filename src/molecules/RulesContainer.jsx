import AccordionRules from "../components/Rules/AccordionRules";
import Headline from "../components/Headline";
import ExtractClassAndPropertiesFromCSS from "../components/Helpers/ExtractClassAndPropertiesFromCSS";

function RulesContainer(props) {
    const componentController = "accordion"
    return (
        <section className="section__rules">
            <Headline text={props.headlineText} />
            <ExtractClassAndPropertiesFromCSS 
                styleguide={props.styleguide}
                weights={props.weights}
                component={componentController}
            />
        </section>
    )
}

export default RulesContainer