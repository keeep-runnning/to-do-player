import { Flex, Heading, StackDivider, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import DefaultMessage from "./DefaultMessage";
import WaitingTask from "./WaitingTask";

export default function WaitingTasks({ tasks, dispatch }) {
  const waitingTasks = tasks.filter((task) => task.remainingTimeInSecond > 0);

  return (
    <Flex as="section" direction="column" rowGap={4}>
      <header>
        <Heading as="h2" size="md">
          할 일 목록
        </Heading>
      </header>
      {waitingTasks.length === 0 ? (
        <DefaultMessage>할 일 추가하기 버튼을 눌러 할 일을 추가하세요.</DefaultMessage>
      ) : (
        <VStack divider={<StackDivider borderColor="gray.400" />} align="stretch" spacing={4}>
          {waitingTasks.map((task) => (
            <WaitingTask key={task.id} task={task} dispatch={dispatch} />
          ))}
        </VStack>
      )}
    </Flex>
  );
}

WaitingTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      scheduledTimeInSecond: PropTypes.number.isRequired,
      remainingTimeInSecond: PropTypes.number.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
