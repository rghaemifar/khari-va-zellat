import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANsans Regular",
  },
  palette: {
    primary: {
      main: "#00baba",
    },
    secondary: {
      main: "#ff6666",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            fontFamily: "IRANsans Regular",
            direction: "ltr",
          };
        },
      },
      // variants: [
      //   {
      //     props: { size: "large" },
      //     style: {
      //       height: 55,
      //     },
      //   },
      // ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IRANsans Bold",
        },
      },
    },
  },
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
});

export default theme;
