import { createTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: deepOrange,
  },
});

export default theme;
