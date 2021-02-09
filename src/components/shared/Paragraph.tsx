import { Text, TextProps } from "@chakra-ui/core";

type Props = TextProps & {
  text: string;
};

const Paragraph: React.FC<Props> = ({ text, ...props }) => {
  return (
    <Text
      fontSize={["lg", "xl"]}
      fontFamily="Poppins"
      maxW="770px"
      w="100%"
      color="gray.700"
      {...props}
    >
      {text}
    </Text>
  );
};

export default Paragraph;
