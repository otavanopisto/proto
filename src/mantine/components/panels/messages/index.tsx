import React from "react";
import {
  Box,
  Stack,
  NavLink,
  Title,
  Text,
  Badge,
  Kbd,
  Tooltip,
} from "@mantine/core";
import { MessageThread } from "../../../../types";
import styles from "./messages.module.css";
interface WorkspacePanelProps {
  messages: MessageThread[];
}

const MessagesPanel = (props: WorkspacePanelProps) => {
  const { messages } = props;
  return (
    <>
      <Tooltip
        label={
          <>
            <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
          </>
        }
      >
        <Box className={styles.title}>
          <Badge color="lime" circle className={styles.titleIcon}>
            <span className="icon-envelope"></span>
          </Badge>
          <Title order={1} className={styles.titleText}>
            Viestit
          </Title>
        </Box>
      </Tooltip>

      <Box className={styles.container}>
        <Box>
          <Stack gap={0}>
            {messages.map((message, index) => (
              <NavLink
                leftSection={<span className="icon-envelope-alt" />}
                label={message.caption}
                description={
                  <>
                    <Text>{message.content}</Text>
                    <Text c="lime">{message.created}</Text>
                  </>
                }
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MessagesPanel;
