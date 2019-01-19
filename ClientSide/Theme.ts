import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import indigo from '@material-ui/core/colors/indigo';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
    palette:{
        type: 'light',
        primary: indigo,
        secondary: lightGreen,
    },
    typography: { useNextVariants: true },
});

export default theme;