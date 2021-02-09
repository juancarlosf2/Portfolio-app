import { Heading, TextProps, useBreakpointValue } from "@chakra-ui/core";
import { biggestTitleVariants, titleVariants } from "../../utils/variants";

type Props = TextProps & { titleSize?: "normal" | "big" | "biggest" };

const Title: React.FC<Props> = ({
  children,
  titleSize = "normal",
  ...props
}) => {
  const useTitleVariant = useBreakpointValue(
    titleSize === "normal" ? titleVariants : biggestTitleVariants
  );
  return (
    <Heading
      fontSize={useTitleVariant}
      lineHeight="short"
      fontFamily="Poppins"
      as="h1"
      color="gray.800"
      fontWeight="medium"
      w="100%"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
