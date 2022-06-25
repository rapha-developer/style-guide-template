import { useState } from "react"
import AccordionItem from "./AccordionItem";

function AccordionRules(props) {
    const items = props.accordions;
    
    function generateAccordionItems() {
        return items.map((object, keyNumber) => {
            return {...object, visible: false, key: keyNumber}
        });
    }
    const [accordions, setAccordions] = useState(generateAccordionItems())
    
    function changeAccordion(key) {
        const accordionsAfterChange = accordions.map((item) => {
            const oldVisible = item.visible
            if(item.key === key) {
                return {...item, visible: !oldVisible}
            } 
            return {...item}
        });
        setAccordions(accordionsAfterChange)
    }
    const accordionItems = accordions.map((accordionItem, key) => {
        return (
            <AccordionItem 
                key={key}
                isActive={accordionItem.visible}
                changeItem={() => changeAccordion(accordionItem.key)}
                title={accordionItem.title}
                styles={accordionItem.styles}
            />
        )
    });

    return (
        <div className='accordions'>
            <div className="container">
                {accordionItems}
            </div>
        </div>
    )
}
export default AccordionRules