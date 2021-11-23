import { Box, Flex, Text } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

import { Carousel } from "../components/Carousel";
import { Attractions } from "../components/Attractions";
import { Description } from "../components/Description";

interface ContinentProps {
  slug: string;
  name: string;
  span: string;
  banner: string;
}

type HomeProps = { continents: ContinentProps[] };

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Text as="title">Europa | Worldtrip</Text>

      <Flex direction="column" maxW="1440px" m="0 auto">
        <Description />

        <Attractions />

        <Box
          w={["60px", "90px"]}
          borderTop={["solid 1px", "solid 2px"]}
          borderColor="gray.600"
          py={["3%", "20px", "30px"]}
          m="0 auto"
        />

        <Text
          textAlign="center"
          fontSize={["20px", "36px"]}
          color="gray.600"
          mb="25px"
        >
          Vamos nessa? <br /> Então escolha o seu continente
        </Text>

        <Carousel continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
    {
      fetch: [
        "continent.slug",
        "continent.name",
        "continent.banner",
        "continent.span_carousel",
        "continent.images",
      ],
      lang: "pt-br",
      pageSize: 5,
    }
  );

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      name: continent.data.name,
      span: continent.data.span_carousel,
      banner: continent.data.banner.url,
    };
  });

  return {
    props: { continents },
    revalidate: 60 * 60, // 1 hour
  };
};
