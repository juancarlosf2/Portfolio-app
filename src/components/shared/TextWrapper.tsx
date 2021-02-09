import { TextProps, useBreakpointValue, VStack } from "@chakra-ui/core";
import { elementSpacingVariants, maxWVariants } from "../../utils/variants";

type Props = TextProps & {
  elementSpacing?: "large" | "short";
};

const TextWrapper: React.FC<Props> = ({
  children,
  elementSpacing = "large",
  ...props
}) => {
  const useElementSpacing = useBreakpointValue(elementSpacingVariants.large);
  const useMaxWidthVariant = useBreakpointValue(maxWVariants);
  return (
    <VStack
      spacing={elementSpacing === "large" ? useElementSpacing : 2}
      justify="flex-start"
      alignItems="flex-start"
      maxW={useMaxWidthVariant}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default TextWrapper;
