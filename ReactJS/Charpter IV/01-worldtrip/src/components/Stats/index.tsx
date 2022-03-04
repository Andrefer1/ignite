import { StatGroup } from "@chakra-ui/react";

import Stat from "./Stat";

interface StatProps {
  number: number;
  data_span: string;
}

interface StatsProps {
  stats: StatProps[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <StatGroup>
      {stats.map((stat) => (
        <Stat key={stat.number} number={stat.number} label={stat.data_span} />
      ))}
      {/* <Stat number={27} label="cidades +100" icon /> */}
    </StatGroup>
  );
}
