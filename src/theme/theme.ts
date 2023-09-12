import { blueGrey, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import "./fonts.css";

const backgroundColors = {
    color1: blueGrey[200],
    color2: blueGrey[600],
    color3: blueGrey[900],
};

// Градиент для фона
const backgroundGradient = `linear-gradient(150deg, 
                            ${backgroundColors.color1} 0%, 
                            ${backgroundColors.color2} 65%, 
                            ${backgroundColors.color3} 100%)
                            fixed`;

let theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // Фон
                    background: backgroundGradient,

                    // Скролл-бар
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#2b2b2b",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            borderRadius: 8,
                            backgroundColor: "#6b6b6b",
                            minHeight: 24,
                            border: "3px solid #2b2b2b",
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "#959595",
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "#959595",
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "#959595",
                        },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
                        {
                            backgroundColor: "#2b2b2b",
                        },
                },
            },
        },
    },

    typography: {
        fontSize: 16,
        fontFamily: `'Exo 2', sans-serif`,
    },

    palette: {
        background: {
            paper: blueGrey[100],
        },
        primary: {
            main: blueGrey[500],
        },
        secondary: {
            main: orange[800],
        },
        error: {
            main: red.A400,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1720,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
