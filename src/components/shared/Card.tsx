import { BoxProps, Heading, Stack } from "@chakra-ui/core";
import Paragraph from "./Paragraph";

type Props = { title: string; text: string } & BoxProps;

const Card: React.FC<Props> = ({ title, text, ...rest }) => {
  return (
    <Stack h="250px" w="100%" maxW="350px" direction="column" {...rest}>
      <Heading>{title}</Heading>
      <Paragraph text={text} />
    </Stack>
  );
};

export default Card;
