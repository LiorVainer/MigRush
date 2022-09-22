import { createTheme } from "@mui/material";
import colors from "../theme/_export.module.scss";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: colors.purpleLight,
      main: colors.purpleDark,
      dark: colors.purpleDarker,
    },
    secondary: {
      light: colors.purpleLighter,
      main: colors.purpleLight,
      dark: colors.purple,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: ["Assitant", "sans-serif"].join(","),
  },
});

export type MuiColorOptions =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
