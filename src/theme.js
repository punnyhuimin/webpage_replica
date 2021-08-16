import {createMuiTheme} from '@material-ui/core/styles'
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#e620b4",
        },
        secondary: {
            main: "#C0B2B2",
        },
        background: {
            default: "#F2F2F2",
            paper: "#ffffff",
        },
        text: {
            primary: "#e620b4",
            secondary: "#FFFFFFFF",
        }
    },
    typography: {
        fontFamily: "Arial",
        h1: {
            fontWeight: 600,
            fontSize: "3.75em",
            color: "white",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.25em",
        },
        h3: {
            fontWeight: 500,
            fontSize: "1.5em",
        },
        h4: {
            fontWeight: 600,
            fontSize: "2.25em",
            color: "blue"
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.75em",
            color: "blue",
        },
        body1: {
            fontWeight: 500,
            fontSize: "1em",
            color: "white"
        },
        body2: {
            fontWeight: 500,
            fontSize: "1.25em",
            color: "white"
        },
        // Used for planDetails
        subtitle1: {
            fontWeight: 600,
            fontSize: "3.75em",
            color: "magenta"
        },
        subtitle2: {
            fontWeight: 600,
            fontSize: "1.5em",
            color: "white"
        },
        h6: {
            fontWeight: 600,
            fontSize: "3.75em",
            color: "white"
        },
    }
})

export default theme