import { Button, ButtonProps } from "@chakra-ui/core";

type Props = {
  variant: "primary" | "outline";
} & ButtonProps;

const CustomButton: React.FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  let button;
  if (variant === "primary") {
    button = (
      <Button
        color="brand.green"
        bg="brand.primary"
        fontFamily="Poppins"
        fontWeight="semibold"
        opacity=".9"
        _hover={{
          opacity: "1",
        }}
        _active={{
          bg: "pink.400",
          opacity: "1",
        }}
        height={["44px", "56px", "56px", "56px"]}
        width={["100%", "210px", "257px", "257px"]}
        borderRadius="100px"
        {...props}
      >
        {children}
      </Button>
    );
  } else {
    button = (
      <Button
        color="gray.700"
        borderWidth="4px"
        borderRadius="10px"
        variant="outline"
        fontFamily="Poppins"
        fontWeight="semibold"
        _hover={{
          bg: "brand.primary",
          color: "gray.200",
        }}
        _active={{
          bg: "green.200",
          borderColor: "green.200",
          color: "gray.800",
        }}
        borderColor="brand.primary"
        height={["44px", "56px", "56px", "56px"]}
        width={["100%", "180px", "219px", "219px"]}
        {...props}
      >
        {children}
      </Button>
    );
  }
  return <>{button}</>;
};

export default CustomButton;
