import { Flex, Text } from "@chakra-ui/react";

import {
  convertSecondIntoHourMinuteSecond,
  formatHourMinuteSecond,
} from "../../utils/time";

type Props = {
  timeInSecond: number;
  prefix?: string;
};

export default function FormattedTime({ timeInSecond, prefix }: Props) {
  const formattedTime = formatHourMinuteSecond(
    convertSecondIntoHourMinuteSecond(timeInSecond)
  );

  return (
    <Flex alignItems="center" columnGap={2}>
      {prefix ? (
        <Text as="span" fontSize="sm" color="gray.500">
          {prefix}
        </Text>
      ) : null}
      <Text as="span" fontSize="sm">
        {formattedTime}
      </Text>
    </Flex>
  );
}
