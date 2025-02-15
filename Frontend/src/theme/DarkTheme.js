// const { createTheme } = require("@mui/material");

// export const darkTheme = createTheme({
//     palette:{
//         mode:"dark",
//         primary:{
//             main:"#e91e63"
//         },
//         secondary:{
//             main:"#5A20CB"
//         },
//         black:{
//             main:"#242B2E"
//         },
//         background:{
//             // main:"#000000",
//             default:"#0D0D0D",
//             paper:"#121212"

//         },
//         text:{
//             primary:"#FFFFFF"
//         }
//     }
// })






import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#5A20CB",
        },
        background: {
            default: "#0D0D0D",  
            paper: "#121212",
        },
        text: {
            primary: "#FFFFFF",  // White text
            secondary: "#B0BEC5",
        },
    },
});

