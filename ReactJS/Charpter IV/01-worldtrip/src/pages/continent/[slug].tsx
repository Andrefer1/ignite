import { Box, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import { Params } from "next/dist/server/router";
import { RichText } from "prismic-reactjs";

import { Card } from "../../components/Card";
import { Stats } from "../../components/Stats";

interface ImageProps {
  city: string;
  country: string;
  image_city: string;
  icon_country: string;
}

interface StatProps {
  number: number;
  data_span: string;
}

interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    banner: {
      url: string;
      alt: string;
    };
    apresentation: string;
    stats: StatProps[];
    images_span: string;
    images: ImageProps[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Text as="title">América | Worldtrip</Text>

      <Box maxW="1440px" m="0 auto">
        <Box
          w="100%"
          h={[
            "150px",
            "237.5px",
            "368.75px",
            "434.375px",
            "434.375px",
            "500px",
          ]}
          mx="auto"
        >
          <Img
            src={continent.banner.url}
            alt={continent.banner.alt}
            w="100%"
            maxW="1440px"
            h={[
              "150px",
              "237.5px",
              "368.75px",
              "434.375px",
              "434.375px",
              "500px",
            ]}
            zIndex="-1"
            position="absolute"
            objectFit="cover"
          />
          <Box
            m={["auto 0", "0 auto"]}
            maxW="1160px"
            py={["100px", "150px", "280px", "320px", "340px", "400px"]}
            px={["20px", "37.5px", "55px", 0]}
          >
            <Heading
              fontSize={["28px", "33px", "38px", "43px", "48px"]}
              color="gray.50"
              mx="auto"
            >
              {continent.name}
            </Heading>
          </Box>
        </Box>

        <Box mx="auto" maxW="1160px">
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
            gap={6}
            maxW="1160px"
            mt={["15px", "25px", "35px", "45px", "55px", "65px"]}
            mx={["20px", 0]}
          >
            <Text
              textAlign="justify"
              maxW="650px"
              mx=" auto"
              fontSize={["14px", "16.5px", "19px", "21.5px", "24px"]}
            >
              {continent.apresentation}
            </Text>

            <Flex align="center">
              <Stats stats={continent.stats} />
            </Flex>
          </Grid>

          <Box
            my={["20px", "30px", "30px", "30px", "40px", "50px"]}
            mx="auto"
            w={["350px", "350px", "650px", "100%"]}
          >
            <Text mx="auto" fontSize={["24px", "36px"]}>
              {continent.images_span}
            </Text>

            <Grid
              templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(4, 1fr)"]}
              gap={[6, 6, 14, 6]}
              mt="30px"
              mx=" auto"
              w={["260px", "260px", "550px", "100%"]}
            >
              {continent.images.map((image) => (
                <Card
                  key={image.city}
                  city={image.city}
                  country={image.country}
                  image={image.image_city}
                  icon={image.icon_country}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async (params) => {
  const prismic = getPrismicClient();

  const continents = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
    {
      fetch: ["continent.slug"],
      lang: "pt-br",
      pageSize: 5,
    }
  );

  const paths = continents.results.map((continent) => ({
    params: { slug: continent.uid },
  }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("continent", slug, { lang: "pt-br" });

  console.log(response.data);

  const continent = {
    slug: response.uid,
    name: response.data.name,
    banner: {
      url: response.data.banner.url,
      alt: response.data.banner.alt,
    },
    apresentation: RichText.asText(response.data.apresentation),
    stats: response.data.stats,
    images_span: response.data.images_span,
    images: response.data.images.map(
      (image: {
        city: string;
        country: string;
        image_city: { url: string };
        icon_country: { url: string };
      }) => ({
        city: image.city,
        country: image.country,
        image_city: image.image_city.url,
        icon_country: image.icon_country.url,
      })
    ),
  };

  return {
    props: { continent },
    revalidate: 60 * 60, // 1 hour
  };
};
