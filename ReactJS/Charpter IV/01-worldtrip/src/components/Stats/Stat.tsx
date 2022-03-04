import {
  Box,
  Center,
  Stat as StatChakra,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface StatProps {
  number: number;
  label: string;
  icon?: boolean;
}

export default function Stat({ number, label }: StatProps) {
  return (
    <>
      <StatChakra w="200px">
        <Center>
          <StatNumber color="orange.400" fontSize={["24px", "48px"]}>
            {number}
          </StatNumber>
        </Center>
        <Center>
          <StatLabel
            fontSize={["18px", "24px"]}
            fontWeight={["normal", "normal", "normal", "bold"]}
          >
            {label}
          </StatLabel>
          {label === "cidades +100" && (
            <Box position="relative" left="10px">
              <FiInfo color="#DADADA" />
            </Box>
          )}
        </Center>
      </StatChakra>
    </>
  );
}
