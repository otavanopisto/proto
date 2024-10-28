import React from "react";
import { Box, Stack, Heading, Link, Flex, Center } from "@chakra-ui/react";
import styles from "./messages.module.css";
import { MessageThread } from "../../../../types";
import Message from "./message";
import PanelComponent from "../panel";

interface MessagePanelProps {
  messages: MessageThread[];
}

const MessagesPanel = (props: MessagePanelProps) => {
  const { messages } = props;
  return (
    <PanelComponent title="Viestit" icon="books">
      <Box>
        <Stack gap={0}>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </Stack>
      </Box>
    </PanelComponent>
  );
};

export default MessagesPanel;
