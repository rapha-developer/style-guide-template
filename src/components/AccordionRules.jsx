import { useState } from "react"

function AccordionRules(props) {
    const items = props.rules
    
    function generateAccordionItems() {
        return items.map((object, keyNumber) => {
            return {...object, visible: false, key: keyNumber}
        });
    }
    const [accordions, setAccordions] = useState(generateAccordionItems())

    function changeAccordion(key) {
        const accordionsAfterChange = accordions.map((item) => {
            if(item.key === key) {
                const oldVisible = item.visible
                return {...item, visible: !oldVisible}
            } else {
                return {...item}
            }
        });
        setAccordions(accordionsAfterChange)
    }
    function isAccordionActive(key) {
        const accordionFound = accordions.find((item) => {
            if (item.key === key) {
                return item;
            }
        });
        return(accordionFound.visible) ? "active" : ""
    }

    const accordions__items = accordions.map((accordionItem, key) => {
        const headerText = `${accordionItem.text} 
        - ${accordionItem.data[0].value} 
        - ${accordionItem.data[1].value}  
        - ${accordionItem.data[2].value} 
        - letter: ${accordionItem.data[3].value}`

        const styles = {}
        accordionItem.data.map((propertyItem) => {
            styles[propertyItem.property] = propertyItem.value
        });
        return (
            <div className="accordion__item" key={key}>
                <button className={`accordion capitalize ${isAccordionActive(accordionItem.key)}`} 
                        onClick={() => changeAccordion(accordionItem.key)}>{headerText}</button>
                <div className="panel">
                    <h2 className="panel__example"
                        style={styles}>This is a AaBbCcDd</h2>
                </div>
            </div>
        )
    });
    return (
        <div className="accordions">
            <div className="container">
                {accordions__items}
            </div>
        </div>
    )
}
export default AccordionRules