import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    accepted: green,
    rejected: red,
  },
});

export default theme;
