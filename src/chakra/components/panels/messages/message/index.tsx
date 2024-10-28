import { MessageThread } from "../../../../../types";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

interface MessageProps {
  message: MessageThread;
}

const Message = (props: MessageProps) => {
  const { message } = props;

  return (
    <Flex padding={1} direction="column">
      <Flex>
        {message.unreadMessagesInThread ? (
          <span className="icon-envelope-alt" />
        ) : (
          <span className="icon-envelope-alt" />
        )}
        <Link>
          <Box>{message.caption}</Box>
        </Link>
      </Flex>
      <Box>{message.created}</Box>
    </Flex>
  );
};

export default Message;
