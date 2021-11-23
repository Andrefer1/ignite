import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface AttractionProps {
  Icon: IconType;
  span: string;
}

export function Attraction({ Icon, span }: AttractionProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Box align="center">
          <Icon size="85px" color="orange" />
          <Text fontSize="24px" mt="15px">
            {span}
          </Text>
        </Box>
      ) : (
        <Flex align="center">
          <Box w="8px" h="8px" bg="orange.400" mr="17px" />
          <Text fontSize="18px">{span}</Text>
        </Flex>
      )}
    </>
  );
}
