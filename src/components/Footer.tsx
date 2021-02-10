import { Box, HStack, Icon, Image, Link, VStack } from "@chakra-ui/core";
import Title from "./shared/Title";
import NextLink from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Box bg="brand.primary" p={8}>
      <VStack
        mx="auto"
        alignItems="center"
        justify="center"
        maxW="1600px"
        textAlign="center"
        spacing={2}
      >
        <Title
          fontSize={["22px", "28px", "36px", "42px"]}
          color="brand.background"
        >
          Hey, lets stay in touch!
        </Title>
        <HStack spacing={2}>
          <NextLink passHref href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
            <Link
              as={motion.a}
              whileTap={{ scale: 0.9 }}
              _hover={{
                cursor: "pointer",
              }}
              target="_blank"
            >
              <Icon
                as={IoLogoLinkedin}
                boxSize="40px"
                color="brand.background"
              />
            </Link>
          </NextLink>
          <NextLink
            passHref
            href="mailto:juan_carlosf2@hotmail.com?subject=work"
          >
            <Link
              as={motion.a}
              whileTap={{ scale: 0.9 }}
              _hover={{
                cursor: "pointer",
              }}
              target="_blank"
            >
              <Image src="/mail-bulk.svg" boxSize="40px" />
            </Link>
          </NextLink>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
