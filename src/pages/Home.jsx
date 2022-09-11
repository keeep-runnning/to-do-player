import { Box, Button, Center, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Center p={6} minH="100vh">
      <SimpleGrid columns={{ md: 2 }} gap={{ base: 8, lg: 16 }} placeItems="center">
        <VStack spacing={0}>
          {keywords.map((keyword, index) => (
            <Box
              key={keyword.text}
              bgGradient={keyword.backgroundGradient}
              bgClip="text"
              fontSize={{ base: "7xl", lg: "8xl", xl: "9xl" }}
              fontWeight="extrabold"
            >
              <motion.div
                animate={{
                  color: ["rgba(0,0,0,1)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"],
                }}
                transition={{
                  delay: 3 * index,
                  repeat: Infinity,
                  repeatDelay: 6,
                  duration: 3,
                  times: [0, 0.15, 0.85, 1],
                }}
              >
                {keyword.text}
              </motion.div>
            </Box>
          ))}
        </VStack>
        <VStack spacing={8}>
          <VStack spacing={{ base: 2, md: 4 }}>
            <Text textAlign="center" fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold">
              TodoList + Timer
            </Text>
            <Text textAlign="center" fontSize={{ lg: "2xl" }}>
              할 일을 계획하고, 실행할 수 있도록 도와줍니다
            </Text>
          </VStack>
          <Button as={Link} to="/main" size={{ base: "md", lg: "lg" }}>
            시작하기
          </Button>
        </VStack>
      </SimpleGrid>
    </Center>
  );
}

const keywords = [
  {
    text: "Focus.",
    backgroundGradient: "linear(to-r, #6300ff, #ff0086)",
  },
  {
    text: "Plan.",
    backgroundGradient: "linear(to-r, #00beff, #0027ff)",
  },
  {
    text: "Start.",
    backgroundGradient: "linear(to-r, #ff8f00, #feff00)",
  },
];
