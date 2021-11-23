import { useRouter } from "next/router";
import { Box, Flex, Img, Link } from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";

export function Header() {
  const { asPath } = useRouter();

  const isContinentPage = asPath.includes("/continent/");

  return (
    <Flex align="center" w="100%" maxW="1440px" h={["50px", "100px"]} mx="auto">
      {isContinentPage && (
        <Link href="/">
          <Box position="relative" right="auto">
            <AiOutlineLeft />
          </Box>
        </Link>
      )}
      <Box m="0 auto">
        <Img
          src="/images/Logo.png"
          alt="Logo"
          w={["81px", "184.06px"]}
          h={["20px", "45.92px"]}
        />
      </Box>
    </Flex>
  );
}
