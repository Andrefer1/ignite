import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { IoMdWine } from "react-icons/io";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BsBuilding, BsBank } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";

import { Attraction } from "./Attraction";

export function Attractions() {
  return (
    <Box pt={["5%", "80px"]} pb={["15%", "80px"]} px={["30px", "10px", "20px"]}>
      <Flex maxW="1240px" m="0 auto">
        <Grid
          templateColumns={[
            "1fr 1fr",
            "1fr 1fr",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap="10%"
          w="100%"
        >
          <GridItem colSpan={1}>
            <Attraction Icon={IoMdWine} span="vida noturna" />
          </GridItem>
          <GridItem colSpan={1}>
            <Attraction Icon={FaUmbrellaBeach} span="praia" />
          </GridItem>
          <GridItem colSpan={1}>
            <Attraction Icon={BsBuilding} span="moderno" />
          </GridItem>
          <GridItem colSpan={1}>
            <Attraction Icon={BsBank} span="clássico" />
          </GridItem>
          <GridItem colSpan={1}>
            <Attraction Icon={GoGlobe} span="e mais..." />
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
