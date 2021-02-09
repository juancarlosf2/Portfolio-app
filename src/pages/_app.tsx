import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "../themes";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
