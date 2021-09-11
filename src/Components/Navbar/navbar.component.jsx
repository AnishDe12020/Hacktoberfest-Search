import React from "react";
import { Flex, Image, Link, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../../Assets/logo.png";

function Navbar() {
  const MotionImage = motion(Image);
  const MotionLink = motion(Link);

  return (
    <Flex w="full" justify="center">
      <Flex
        color={{ base: "brand.secondary", md: "white" }}
        alignItems="center"
        justify="space-between"
        w="full"
        position="absolute"
        maxW="1500px"
        px={{ base: "8", md: "12", lg: "20", xl: "40" }}
        py={{ base: "8", md: "12" }}
      >
        <MotionImage
          cursor="pointer"
          alt="hacktoberfest search"
          src={Logo}
          w="75px"
          whileHover={[{ scale: [1, 1.12, 1.1, 1.1, 1.1, 1.1] }]}
          whileTap={{ scale: 1 }}
        />
        <Flex fontWeight="medium" experimental_spaceX="10">
          <MotionLink
            whileTap={{ scale: 1 }}
            _hover={{}}
            whileHover={[{ scale: [1, 1.12, 1.1, 1.1, 1.1, 1.1] }]}
          >
            Contribute
          </MotionLink>
          <MotionLink
            _hover={{}}
            whileTap={{ scale: 1 }}
            whileHover={[{ scale: [1, 1.15, 1.1, 1.1, 1.1, 1.1] }]}
          >
            Promote
          </MotionLink>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
