import { Box } from "@chakra-ui/core";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import AboutSection from "../components/HeroSection/AboutSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Tremols Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box as="main" bg="brand.background" w="100%" h="100%">
        <NavBar />
        <HeroSection />
        <Box id="about">
          <AboutSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
