import { extendTheme } from "@chakra-ui/core";

const fonts = {
  Poppins: "Poppins, serif",
};
const textStyles = {
  h2: {
    fontSize: ["22px", "4xl"],
    fontWeight: "bold",
    lineHeight: "auto",
    letterSpacing: "tighter",
    fontFamily: "Poppins",
  },
  h4: {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "114%",
    fontFamily: "Poppins",
  },
};
const colors = {
  brand: {
    background: "#FAFAFA",
    primary: "#713FFF",
    green: "#E0FF86",
  },
};
const fontWeights = {
  semibold: 600,
  extrabold: 800,
};
const overriding = {
  fonts,
  colors,
  textStyles,
  fontWeights,
};
const theme = extendTheme(overriding);
export default theme;
