import { useState } from "react"
import Topic from "../Topic";

function TypographyScale(props) {
    const tabs = props.tabs;
    const [tabItems, setTabItems] = useState(generateTabItems());
    
    function generateTabItems() {
        const firstItem = 0;
        const dataToMakeTabs = tabs.map((tabItem, key) => {
            const visibleProperty = (key === firstItem) ? true : false;
            return { ...tabItem, visible: visibleProperty }
        });
        return dataToMakeTabs;
    }
    function changeTab(name) {
        const newTabItems = tabItems.map((tabItem) => {
            if (tabItem.name === name) {
                return { ...tabItem, visible: true }
            } else {
                return { ...tabItem, visible: false }
            }
        });

        setTabItems(newTabItems);
    }
    function isActive(tabName) {
        const foundItem = tabItems.find((item) => {
            if (item.name === tabName) {
                return item
            }
        });
        return (foundItem.visible) ? "active" : "";
    }
    const tabsFromMenu = tabs.map((tabItem, key) => {
        return (
            <button className={`verticalTab__link capitalize ${isActive(tabItem.name)}`}
                onClick={() => changeTab(tabItem.name)} key={key}>{tabItem.name}</button>
        )
    });
    const contentFromTabs = tabItems.map((tabItem, key) => {
        return (
            <div className="verticalTab__item" data-visible={tabItem.visible} key={key}>
                <h3 className="verticalTab__title capitalize" 
                    style={tabItem.styles}>{tabItem.name}</h3>
                <p className="verticalTab__description">{tabItem.description} <span>{tabItem.variable}</span></p>
            </div>
        );
    });

    return (
        <div className="tabs">
            <div className="verticalTab__wrapper">
                <Topic title="type scales" />

                <div className="verticalTab">
                    <div className="verticalTab__menu">
                        {tabsFromMenu}
                    </div>
                    <div className="verticalTab__items">
                        {contentFromTabs}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TypographyScale