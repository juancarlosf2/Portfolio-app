import { Box, Flex, Image, Text } from "@chakra-ui/core";
import TextWrapper from "../../components/shared/TextWrapper";
import Title from "../../components/shared/Title";
import Paragraph from "../../components/shared/Paragraph";
import CustomButton from "../shared/Button";
import NextLink from "next/link";

function AboutSection() {
  return (
    <Flex
      py={["100px", "250px"]}
      px="20px"
      bg="gray.700"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box maxW="900px">
        <Image fit="fill" src="/ProfilePic-2.png" />
      </Box>
      <TextWrapper mt={10}>
        <Title
          mx="auto"
          color="gray.200"
          titleSize="biggest"
          textAlign="center"
          fontWeight="semibold"
          lineHeight="114.5%"
        >
          Hey, there. <br />{" "}
          <Text as="span" color="brand.primary">
            Fellow visitor.
          </Text>
        </Title>
        <Paragraph
          color="gray.300"
          text="I’m currently 22 years old, I started to learn software development back in 2018. I went to college looking for a software development degree, and got it. Graduated with honors two years after. This wasn’t enough. It takes more than a few university classes to become a solid web developer. I had to be in a constant state of learning. New technologies, OOP, functional programming, different approaches, how to build API. Knowledge was constantly knocking on my door. Crazy."
        />
        <Paragraph
          color="gray.300"
          text="Practice is what makes us, developers, good at building highly scalable solutions to a competitive market that is growing at every blink we take. If you want to make progress you have to put your hands to work. Talking to people better than you in any area you want to success is absolutely key. Now, I’m looking for a full-time job and hoping to work in a team where creativity and best practices are in harmony. My main skills are in the front-end with javascript, but I can work as a back-end, mobile environment using different languages, and frameworks."
        />
        <Paragraph
          color="gray.300"
          text="In my free time, I lift weights, read books, watch some tv shows, and play with my dog. In the future I hope to be an entrepeneur where I can solve a problem in my community and achieve some profit in the process. If we share similar beliefs, we must join forces!"
        />
        <NextLink passHref href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
          <a target="_blank" style={{ width: "100%" }}>
            <CustomButton color="gray.300" variant="outline">
              Hire Me!
            </CustomButton>
          </a>
        </NextLink>
      </TextWrapper>
    </Flex>
  );
}

export default AboutSection;
