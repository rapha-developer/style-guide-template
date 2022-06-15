import AccordionRules from "../components/AccordionRules";
import Headline from "../components/Headline";

function RulesContainer(props) {
    return (
        <section className="section__rules">
            <Headline text={props.headlineText} />
            <AccordionRules rules={props.rules} />
        </section>
    )
}

export default RulesContainer