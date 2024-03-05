import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import razak from "../images/razak.HEIC"

const greeting = "Hello, I am Abdoul Razak!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" name="Razak" src={razak} />
      <Heading as="h1" size="md" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
