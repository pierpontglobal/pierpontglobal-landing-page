import {createMuiTheme} from '@material-ui/core/styles';

export const defaultColor = (theme) => {
  switch (theme) {
    case 'primary':
      return '#3A3E43';
    case 'secondary':
      return '#fafafa';
    default:
      return 'white';
  }
};

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {main: '#3A3E43'},
    secondary: {main: '#fafafa'},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        borderRadius: 3,
        border: 0,
        height: 48,
      },
    },
  },
  typography: {
    fontFamily: 'Raleway, serif',
    useNextVariants: true,
  },
});
