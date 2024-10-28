import React from "react";
import { Box, Stack, Link, Heading, Badge } from "@chakra-ui/react";
import styles from "./announcements.module.css";
import { Announcement } from "../../../../types";
import AnnouncementItem from "./announcement";
import PanelComponent from "../panel";

interface WorkspacePanelProps {
  announcements: Announcement[];
}

const AnnouncementsPanel = (props: WorkspacePanelProps) => {
  const { announcements } = props;
  return (
    <PanelComponent title="Tiedotteet" icon="paper-plane">
      <Box>
        <Stack gap={0}>
          {announcements.map((announcement, index) => (
            <AnnouncementItem key={index} announcement={announcement} />
          ))}
        </Stack>
      </Box>
    </PanelComponent>
  );
};

export default AnnouncementsPanel;
