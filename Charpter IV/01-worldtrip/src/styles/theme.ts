import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "500": "#999999",
      "600": "#47585B",
    },
    orange: {
      "400": "#FFBA08",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "black",
      },
    },
  },
});
