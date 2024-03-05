import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "abdoulrazakadamoubello@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/elmagnifiko",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abdoul-razak-adamou-53857a264/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/23529538/abdoul-razak",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="#18181b"
      color="white"
      zIndex="999"
    >
      <Box maxW="1280px" mx="auto" py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <nav>
            {socials.map((social, index) => (
              <Link key={index} href={social.url} isExternal>
                <IconButton
                  aria-label="social-icon"
                  icon={<FontAwesomeIcon icon={social.icon} />}
                  variant="ghost"
                />
              </Link>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")} cursor="pointer">
                Projects
              </Link>
              <Link onClick={handleClick("contactme")} cursor="pointer">
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;