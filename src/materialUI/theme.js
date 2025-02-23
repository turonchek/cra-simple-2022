import { createTheme } from "@mui/material";

import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";
import { indigo } from "@mui/material/colors";

export const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:600,
            md:900,
            lg:1366,
            xl:1920
        }
    },
    spacing: 1,
    palette: {
        mode: 'light',
        primary: {
            light: indigo[100],
            main: indigo[100],
            dark: indigo[900],
        },
        secondary: {
            light: red[500],
            main: red[700],
            dark: red[900],
        },
        text: {
            primary:grey[900],
            secondary:grey[600],
            disabled: grey[100]
        },
        // action: {
        //     hover: indigo[900],
        // },
        background: {
            default: grey[100],
            paper: grey[300] 
        },
    }
});