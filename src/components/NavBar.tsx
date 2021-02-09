import { useRef } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/core";
import { FaAlignLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  let content;
  if (!isMobile) {
    content = (
      <>
        <Spacer />
        <Stack
          spacing={[8, 6, 10, 20]}
          color="white"
          justify="flex-end"
          align="center"
          direction="row"
          fontWeight="semibold"
        >
          <NavLinks />
        </Stack>
      </>
    );
  } else {
    content = (
      <>
        <IconButton
          aria-label="toggle menu"
          icon={<FaAlignLeft />}
          variant="ghost"
          color="gray.800"
          colorScheme="none"
          onClick={onOpen}
          ref={btnRef}
          ml="auto"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent bg="gray.200">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Stack direction="column">
                  <NavLinks />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }
  return (
    <Flex
      zIndex={1}
      position="sticky"
      py={[2, 4]}
      px={["20px", "30px"]}
      align="center"
      justify="center"
      top={0}
      bg="brand.background"
    >
      <Flex
        color="brand.secondary1"
        maxWidth={["40em", "70em", "80em", "100em"]}
        width="100%"
        align="center"
      >
        <Box
          as={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll.scrollToTop()}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Image
            width={180}
            height={60}
            src="/juanlogo.svg"
            layout="intrinsic"
          />
        </Box>
        {content}
      </Flex>
    </Flex>
  );
};

export default NavBar;
