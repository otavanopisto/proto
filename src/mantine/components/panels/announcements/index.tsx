import React from "react";
import { Box, Stack, NavLink, Title, Text, Badge } from "@mantine/core";
import { Announcement } from "../../../../types";
import styles from "./announcements.module.css";
interface WorkspacePanelProps {
  announcements: Announcement[];
}

const AnnouncementsPanel = (props: WorkspacePanelProps) => {
  const { announcements } = props;

  return (
    <>
      <Box className={styles.title}>
        <Badge color="grape" circle className={styles.titleIcon}>
          <span className="icon-paper-plane"></span>
        </Badge>
        <Title order={1} className={styles.titleText}>
          Tiedotteet
        </Title>
      </Box>
      <Box className={styles.container}>
        <Box>
          <Stack gap={0}>
            {announcements.map((announcement, index) => (
              <NavLink
                leftSection={<span className="icon-paper-plane" />}
                label={announcement.caption}
                description={
                  <>
                    <Text>{announcement.content}</Text>
                    <Text c="grape">{announcement.created}</Text>
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

export default AnnouncementsPanel;
