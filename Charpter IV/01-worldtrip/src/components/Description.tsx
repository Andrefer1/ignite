import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export function Description() {
  return (
    <Box mx="0 auto">
      <Img
        src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80"
        alt="Night sky image"
        w="100%"
        maxW="1440px"
        h={["163px", "206px", "249px", "292px", "335px"]}
        position="absolute"
        zIndex="-1"
        objectFit="cover"
        objectPosition="0 25%"
      />
      <Flex
        h={["163px", "206px", "249px", "292px", "335px"]}
        px={["15px", "17.5px", "20px", 0]}
        maxW="1240px"
        align="center"
        justify="space-between"
        m="0 auto"
      >
        <Box>
          <Heading
            mb={[5, 10]}
            fontSize={["20px", "24px", "30px", "36px"]}
            fontWeight="600"
            color="gray.50"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text
            fontSize={["14px", "15.5px", "17.75px", "20px"]}
            w={["100%", "80%"]}
            color="gray.100"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Img
          src="/images/Airplane.png"
          alt="Yelow airplane with clouds"
          display={["none", "none", "none", "block"]}
          transform="rotate(3deg) translateY(55px)"
        />
      </Flex>
    </Box>
  );
}
