import { Box, StackProps } from "@chakra-ui/core";

type Props = StackProps;

const Wrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Box
        px={["20px", "30px"]}
        my={["100px", "150px", "150px", "270px"]}
        maxW={["1640px", "1660px"]}
        {...props}
        mx="auto"
      >
        {children}
      </Box>
    </>
  );
};

export default Wrapper;
