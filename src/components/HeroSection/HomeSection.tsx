import React from "react";
import { Stack, Box, Text, Image, Link } from "@chakra-ui/core";
import CustomButton from "../shared/Button";
import ContentWrapper from "../shared/ContentWrapper";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import Wrapper from "../shared/Wrapper";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io";

const HomeSection = () => {
  return (
    <Wrapper py={10}>
      <ContentWrapper bg="brand.background">
        <Stack spacing={5} maxW="880px">
          <Title>
            More than a web developer.
            <br />
            <Text as="span" fontWeight="bold">
              A problem solver .
            </Text>
          </Title>
          {/*this is a line*/}
          <Box bg="brand.primary" maxW="592px" h="8px" borderRadius={4} />
          <Paragraph text="I’m Juan Carlos, a web developer based in Dominican Republic, looking for a full-time remote job. Willing to learn, thrive and face problems to achieve solutions with a stoic approach and logic-based focus. If you’re interested, I can:" />
          <Stack
            alignSelf={["inherited", "center", "center", "center", "start"]}
            direction={["column", "row"]}
            spacing={[4, 2, 4]}
            align="center"
          >
            <NextLink
              passHref
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string}
            >
              <Link
                _hover={{ textDecor: "none" }}
                target="_blank"
                width={["100%", "210px", "257px", "257px"]}
              >
                <CustomButton variant="primary">
                  Solve your problems
                </CustomButton>
              </Link>
            </NextLink>
            <Text
              as="span"
              color="gray.700"
              fontFamily="Poppins"
              fontWeight="semibold"
              fontSize="lg"
            >
              Or
            </Text>
            <NextLink passHref href="https://github.com/juancarlosf2">
              <Link
                _hover={{ textDecor: "none" }}
                target="_blank"
                width={["100%", "210px", "257px", "257px"]}
              >
                <CustomButton rightIcon={<IoLogoGithub />} variant="outline">
                  See my projects
                </CustomButton>
              </Link>
            </NextLink>
          </Stack>
        </Stack>
        <Image
          maxW="350px"
          height={["auto"]}
          width={["100%"]}
          mx="auto"
          layout="intrinsic"
          src="/ProfilePic.png"
          alt="me"
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomeSection;
