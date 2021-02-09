import { Link as CharkaLink, LinkProps } from "@chakra-ui/core";
type Props = LinkProps;

const ChakraLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <CharkaLink
        color="gray.700"
        fontFamily="Poppins"
        transitionDuration="1"
        transition="ease-in"
        _hover={{
          textDecor: "none",
          color: "gray.900",
          transition: "ease-in-out",
          transitionDuration: "0.4",
        }}
        {...props}
      >
        {children}
      </CharkaLink>
    </>
  );
};

export default ChakraLink;
