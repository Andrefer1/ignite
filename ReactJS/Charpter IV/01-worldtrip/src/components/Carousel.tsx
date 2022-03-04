import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface Continents {
  slug: string;
  name: string;
  span: string;
  banner: string;
}

type CarouselProps = { continents: Continents[] };

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex maxW="1240px" w="100%" m="0 auto" direction="column" cursor="pointer">
      <Swiper
        modules={[Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        slidesPerView={1}
        loop={true}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Box position="absolute">
              <Text
                color="gray.50"
                fontSize={["24px", "48px"]}
                fontWeight="600"
              >
                {continent.name}
              </Text>
              <Text
                color="gray.100"
                fontSize={["14px", "24px"]}
                fontWeight="600"
              >
                {continent.span}
              </Text>
            </Box>
            <Link href={`/continent/${continent.slug}`} passHref>
              <Img
                src={continent.banner}
                alt={`Image of a city in ${continent.slug}`}
                objectFit="cover"
                w="100%"
                h={["250px", "450px"]}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
