const { createMuiTheme, useTheme } = require("@material-ui/core");


const theme = createMuiTheme({
  ...useTheme,
  custom: {
    formControl: {
      margin: '8px',
      minWidth: '120px',
    },
    selectEmpty: {
      marginTop: '8px',
      minWidth: '100px',
    },
    inputLabel: {
      margin: '8px 0',
    },
    button: {
      margin: '16px',
      minWidth: '100px',
    },
  },
})

export default theme;