import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface CardProps {
  city: string;
  country: string;
  image: string;
  icon: string;
}

export function Card({ city, country, image, icon }: CardProps) {
  return (
    <Box w="256px" h="279px" border="solid 1px orange" borderRadius="4px">
      <Box h="173px">
        <Img
          src={image}
          w="256px"
          h="173px"
          m="-2px 0 0 -1px"
          borderRadius="4px 4px 0 0"
          position="absolute"
          objectFit="cover"
        />
      </Box>
      <Flex justify="space-around" align="center" mt="15px">
        <Box>
          <Text fontSize="20px" fontWeight="600" color="gray.600" mb="15px">
            {city}
          </Text>
          <Text fontSize="16px" color="gray.500">
            {country}
          </Text>
        </Box>
        <Box w="30px" h="30px" borderRadius="50%" overflow="hidden">
          <Img
            src={icon}
            alt={`Flag of ${city}`}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
}
