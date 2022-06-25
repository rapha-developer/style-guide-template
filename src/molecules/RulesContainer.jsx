import AccordionRules from "../components/Rules/AccordionRules";
import Headline from "../components/Headline";
import ExtractClassAndPropertiesFromCSS from "../components/Helpers/ExtractClassAndPropertiesFromCSS";

function RulesContainer(props) {
    return (
        <section className="section__rules">
            <Headline text={props.headlineText} />
            <ExtractClassAndPropertiesFromCSS 
                styleguide={props.styleguide}
                weights={props.weights}
                component={props.component}
            />
        </section>
    )
}

export default RulesContainer