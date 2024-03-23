import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={8}>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTExNTkxNDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Jay" />
        <Heading as="h1" size="2xl">
          John Jay
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Software Engineer | Web Developer | Tech Enthusiast
        </Text>

        <HStack spacing={4}>
          <Link href="https://linkedin.com/in/johnjay" isExternal>
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com/johnjay" isExternal>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
          <Link href="https://github.com/johnjay" isExternal>
            <Button colorScheme="gray" leftIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
        </HStack>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">Hi, I'm John Jay, a passionate software engineer with expertise in web development. I love building elegant and efficient solutions to complex problems. With a strong foundation in JavaScript, React, and Node.js, I strive to create exceptional user experiences and robust applications.</Text>
        </Box>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={6} align="start">
            <Box>
              <Heading as="h3" size="lg">
                Project 1
              </Heading>
              <Text>Description of Project 1 goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Project 2
              </Heading>
              <Text>Description of Project 2 goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Project 3
              </Heading>
              <Text>Description of Project 3 goes here.</Text>
            </Box>
          </VStack>
        </Box>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Get in Touch
          </Heading>
          <Text fontSize="lg">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</Text>
          <Button mt={4} colorScheme="teal" size="lg">
            Contact Me
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
