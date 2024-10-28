import React from "react";
import {
  Box,
  Stack,
  Notification,
  Text,
  NavLink,
  Title,
  Badge,
} from "@mantine/core";
import { Note } from "../../../../types";
import styles from "./workspace.module.css";
import dayjs from "../../../../utils/time";
interface WorkspacePanelProps {
  notes: Note[];
}

const colorMap = {
  OWN: "muikku.7",
  LOW: "muikku.1",
  NORMAL: "muikku",
  HIGH: "red",
};

const WallPanel = (props: WorkspacePanelProps) => {
  const { notes } = props;
  return (
    <>
      <Box className={styles.title}>
        <Badge color="orange" circle className={styles.titleIcon}>
          <span className="icon-star-empty"></span>
        </Badge>
        <Title order={1} className={styles.titleText}>
          Seinämä
        </Title>
      </Box>
      <Box className={styles.container}>
        <Box>
          <Title className={styles.subtitle} order={2}>
            Tehtävät
          </Title>
          <Stack gap={0}>
            {notes.map((note, index) => (
              <Notification
                key={index}
                withCloseButton={false}
                title={
                  <>
                    <Text>{note.title}</Text>
                    <Text c="orange">
                      {dayjs(note.dueDate)
                        .add(Math.random() * 48, "hour")
                        .format("LLL")}
                    </Text>
                  </>
                }
                color={colorMap[note.priority] || "gray"}
              >
                <Box component="a" href="/">
                  Linkki
                </Box>
              </Notification>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default WallPanel;
