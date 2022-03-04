import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex w="100%" p={[2, 3]} justify="center" align="center">
      <Text fontSize={["10px", "15px"]}>Desenvolvido com Chakra UI</Text>
    </Flex>
  );
}
