
/* (?:(.[^{]+){\n?:(rules-[^{]+)\s{\s\n|\n).{2,4}--([a-zA-Z_]{1,}):\s([^;]+);|\.([^{]+)\s{ */

import React, { useState } from "react";

class Extract  {

    constructor(styleguide) {
        this.rules = []
        this.main(styleguide)
    }
    main(styleguide) {
        const REGEX_EXPRESSION 
        =  /(?:(.[^{]+){\n?:(rules-[^{]+)\s{\s\n|\n).{2,4}([a-zA-Z_-]{1,}):\s{0,2}([^;]+);|\.([^{]+)\s{/g
        
        const resultsAfterRegex = [...styleguide.matchAll(REGEX_EXPRESSION)];
        for (let item = 0; item < resultsAfterRegex.length; item++) {
            this.mapAllObject(this.rules, resultsAfterRegex[item], item)
        }
        
    }
    mapAllObject(rules, elements, index) {
        const positionProperty = 3
        const positionValue = 4
        const positionClass = 5
        const copyFromRules = Object.assign(rules)

        const hasClass = (elements[positionClass]) ? true : false
        if (hasClass) {
            const classWithSpaces = elements[positionClass].replace("-", " ")
            copyFromRules.push(generateExtract(classWithSpaces)) 
        }
        if (!hasClass) {
            const copyLength = (copyFromRules.length - 1)
            copyFromRules[copyLength].data.push(
                generatePropertiesToExtract(
                    elements[positionProperty], 
                    elements[positionValue]
                )
            );
        }
        function generateExtract(ClassName) {
            return {
                class: ClassName,
                data: []
            }
        }
        function generatePropertiesToExtract(label, value) {
            return {
                label:label,
                value: value,
            }
        }
    }
}
export default Extract