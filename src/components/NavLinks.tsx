import { Link } from "react-scroll";
import ChakraLink from "./shared/ChakraLink";
import styles from "../../styles/Styles.module.css";
import CustomButton from "./shared/Button";
import NextLink from "next/link";

const NavLinks = () => {
  return (
    <>
      <ChakraLink as="li" listStyleType="none">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass={styles.active}
          offset={-86}
        >
          Home
        </Link>
      </ChakraLink>
      <ChakraLink as="li" listStyleType="none">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass={styles.active}
          offset={-60}
        >
          About
        </Link>
      </ChakraLink>
      <NextLink passHref href="/pdf">
        <ChakraLink target="_blank">My Resume</ChakraLink>
      </NextLink>
      <NextLink passHref href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
        <a target="_blank">
          <CustomButton
            maxH={["44px", "44px", "44px", "48px"]}
            maxW="140px"
            variant="outline"
          >
            Contact Me
          </CustomButton>
        </a>
      </NextLink>
    </>
  );
};

export default NavLinks;
