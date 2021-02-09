import React, { ReactElement } from "react";
import { Stack, Text } from "@chakra-ui/core";
import CustomButton from "../shared/Button";
import Card from "../shared/Card";
import ContentWrapper from "../shared/ContentWrapper";
import Image from "../shared/Image";
import Paragraph from "../shared/Paragraph";
import TextWrapper from "../shared/TextWrapper";
import Title from "../shared/Title";
import Wrapper from "../shared/Wrapper";
import Methodology from "./Methodology";
import NextLink from "next/link";

function TechSection(): ReactElement {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>
              <Text as="span" fontWeight="bold">
                {" "}
                JavaScript & React{" "}
              </Text>
              as an extension of my mind
            </Title>
            <Paragraph text="What I like the most using these two technologies combined together, is that you can adapt your website to fit the needs of your customers in an easy way. Thats only the begining. Reacts allows you to build multiple reusable components that helps to put a smile in the devs face team." />
          </TextWrapper>
          <Image fit="fill" src="/image-1.svg" alt="me" />
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <ContentWrapper display="flex" flexDirection="column-reverse">
          <Image fit="fill" src="/image-2.svg" alt="me" />
          <TextWrapper>
            <Title>
              <Text as="span" fontWeight="bold">
                Typescript
              </Text>
              {""} as a must in every project.
            </Title>
            <Paragraph text="Typescript provides a way to build applications using types and interfaces. Including TS in the front-end will prevent type errors, it will be useful when it comes to scalability, and makes it easy to test your web app. Thrust me, the future of web development is now." />
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>
              {" "}
              <Text as="span" fontWeight="bold">
                Collaboration
              </Text>
              : A key for success
            </Title>
            <Paragraph text="Collective above the individual. I can work with multiple frameworks and technologies that can come in handy for the team. I’ll be there providing everything I know for the sake of the web application." />
          </TextWrapper>
          <Image fit="fill" src="/image-3.svg" alt="me" />
        </ContentWrapper>
      </Wrapper>
      <Methodology />
      <Wrapper>
        <Stack justify="center" spacing={10}>
          <Title fontWeight="semibold" textAlign="center">
            What can I bring to the table?
          </Title>
          <Stack
            flexDirection={["column", "column", "column", "row"]}
            justify="space-between"
            align="center"
            mb={5}
            spacing={[2, 5]}
          >
            <Card
              title="Focused Deep Work"
              text="High perfomance is my goal. Long hours of prolonged focus is an ability I’ve learn to endure. To provide the most amount of value to my clients and company, focus will be always critical."
            />
            <Card
              title="I learn fast"
              text="Learning things fast and well are part of the job as a web developer. If I don’t know something I ask for help and read documents about the subject on the internet."
            />
            <Card
              title="Self discipline"
              text="I’m used to have a strong focus on what I want. Applying discipline everyday as a web developer helps me to stay aware of my priorities for the day. Discipline is key in every aspect of life, not just work."
            />
          </Stack>
          <Image alignSelf="center" src="image-5.svg" />
        </Stack>
      </Wrapper>
      <Wrapper>
        <ContentWrapper gridColumn="auto" flexDirection="column">
          <Stack maxW="934px">
            <Title
              fontWeight="semibold"
              fontSize={["34px", "50px", "60px", "72px"]}
            >
              Do you think I can be useful for your company?
            </Title>
            <NextLink passHref href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
              <a target="_blank">
                <CustomButton variant="primary">Hire me!</CustomButton>
              </a>
            </NextLink>
          </Stack>
          <Image ml="auto" fit="fill" src="/image-4.svg" />
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default TechSection;
