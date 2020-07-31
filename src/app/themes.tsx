import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      title: {
        paddingBottom: 20,
        color: 'white',
      },
      subheader: {
        paddingTop: 10,
        textAlign: 'end',
      },
    },
    MuiCardContent: {
      root: {
        padding: 0,
      },
    },
    MuiTableCell: {
      root: {
        padding: '10px',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        fontSize: 'inherit',
        verticalAlign: 'top',
      },
    },
  },
});

export default theme;
