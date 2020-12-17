
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { blueGrey, deepOrange, green } from "@material-ui/core/colors";

const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  name: 'Light Theme',
  palette: {
    primary: {
      light: blueGrey[500],
      main: '#2D4C64',
      dark: blueGrey[900],
    },
    secondary: {
      light: deepOrange[200],
      main: '#E1755E',
    },
    error: {
      main: '#B6342F'
    },
    success: {
      light: '#A2CDB8',
      main: green[800],
    },
    text: {
      main: '#F9FBFC',
    }
  }
};

export default createMuiTheme(overridings);