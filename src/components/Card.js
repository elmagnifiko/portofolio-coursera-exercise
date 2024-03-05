import { Heading, HStack, Image, Text, VStack, Link, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      spacing={4}
      w="100%"
      maxW="400px"
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} />
      <Heading as="h3" size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Link href="#" color="blue.500" fontWeight="bold">Learn More         <IconButton aria-label="Learn More" icon={<FontAwesomeIcon icon={faArrowRight} />} /></Link>
        
      </HStack>
    </VStack>
  );
};

export default Card;
