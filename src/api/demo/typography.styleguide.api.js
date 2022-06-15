export default {
    fontFamilies: {
        property: "fontFamily",
        data: [
            {
                sample: "this is a poppins family",
                name: "poppins"
            },
            {
                sample: "this is a montserrat family",
                name: "montserrat"
            }
        ]
    },
    fontSizes: {
        property: "fontSize",
        data: [
            {
                name: "Heading One",
                value: "5rem",
                variable: "--scale--h1"
            },
            {
                name: "Heading Two",
                value: "4rem",
                variable: "--scale--h2"
            },
            {
                name: "Heading Three",
                value: "3rem",
                variable: "--scale--h3"
            },
            {
                name: "Heading Four",
                value: "2.5rem",
                variable: "--scale--h4"
            },
            {
                name: "Heading Five",
                value: "2rem",
                variable: "--scale--h5"
            },
            {
                name: "Heading Six",
                value: "1.5rem",
                variable: "--scale--h6"
            },
        ],   
    },
    weights: {
        property: "fontWeight",
        data: [
            {
                unit: 300,
                label: "light",
            },
            {
                unit: 400,
                label: "medium",
            },
            {
                unit: 500,
                label: "regular",
            },
            {
                unit: 600,
                label: "semiBold",
            },
            {
                unit: 700,
                label: "bold",
            },
            {
                unit:800,
                label: "extraBold",
            },
            {
                unit: 900,
                label: "black",
            },
        ]
    },
}