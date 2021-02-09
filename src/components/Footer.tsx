import { Box, HStack, Icon, Image, VStack } from "@chakra-ui/core";
import Title from "./shared/Title";
import NextLink from "next/link";
import { IoLogoLinkedin } from "react-icons/io";

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
            <a target="_blank">
              <Icon
                as={IoLogoLinkedin}
                _hover={{ cursor: "pointer" }}
                boxSize="40px"
                color="brand.background"
              />
            </a>
          </NextLink>
          <NextLink passHref href="https://outlook.live.com/mail/0/inbox">
            <a target="_blank">
              <Image
                src="/mail-bulk.svg"
                _hover={{ cursor: "pointer" }}
                boxSize="40px"
              />
            </a>
          </NextLink>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
