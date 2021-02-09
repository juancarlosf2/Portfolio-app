import { Grid, GridProps } from "@chakra-ui/core";

type Props = { id?: string } & GridProps;

const ContentWrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Grid
        spacing={12}
        gap={[8, 10]}
        templateColumns={["auto", "auto", "auto", "auto auto"]}
        justifyContent={["center", "center", "center", "space-between"]}
        mx="auto"
        alignItems="center"
        {...props}
      >
        {children}
      </Grid>
    </>
  );
};

export default ContentWrapper;
