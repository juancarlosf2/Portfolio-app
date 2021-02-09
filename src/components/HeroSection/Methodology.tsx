import { Stack } from "@chakra-ui/core";
import Image from "next/image";
import Title from "../shared/Title";
import Wrapper from "../shared/Wrapper";
import CustomImage from "../shared/Image";
function Methodology() {
  return (
    <Wrapper>
      <Stack spacing={[6, 8]} justify="center" align="center">
        <Title fontWeight="semibold" mb={[6, 8]} maxW="890px">
          Now something we know its crucial: What's my methodology?
        </Title>
        <Image
          layout="intrinsic"
          width={1200}
          height={287}
          src="/methodology.png"
        />
        <CustomImage width={558} height={281} src="/image-6.svg" />
      </Stack>
    </Wrapper>
  );
}

export default Methodology;
