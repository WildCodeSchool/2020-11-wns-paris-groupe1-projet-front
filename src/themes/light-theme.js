import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, deepOrange, green } from '@material-ui/core/colors';

export const overridings = {
  name: 'Light Theme',
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontweight: {
      normal: 'normal',
      fontWeightBold: 'bold',
    },
  },
  palette: {
    primary: {
      light: blueGrey[500],
      main: '#2D4C64',
      dark: blueGrey[900],
    },
    secondary: {
      light: deepOrange[200],
      main: '#F9FBFC',
      dark: '#03DAC5',
    },
    error: {
      main: '#B6342F',
    },
    success: {
      light: '#A2CDB8',
      main: green[800],
    },
    menuTextHover: {
      main: '#03DAC5',
    },
  },
  bidouille: {
    hover: {
      main: 'red',
    },
  },
};

export default createMuiTheme(overridings);
