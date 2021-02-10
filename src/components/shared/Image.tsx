import { ImageProps, Image as CustomImage } from "@chakra-ui/core";

type Props = ImageProps;

const Image = ({ ...props }: Props) => {
  return (
    <CustomImage maxH={["450px", "75%", "75%", "75%", "100%"]} {...props} />
  );
};

export default Image;
