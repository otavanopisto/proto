import React from "react";
import { Box, Stack, Flex, Center, Heading, Badge } from "@chakra-ui/react";
import styles from "./workspace.module.css";
import { Note } from "../../../../types";
import NoteItem from "./note";
import PanelComponent from "../panel";
interface WorkspacePanelProps {
  notes: Note[];
}

const WallPanel = (props: WorkspacePanelProps) => {
  const { notes } = props;
  return (
    <PanelComponent title="Seinämä" icon="star-empty">
      <Box>
        <Heading className={styles.subtitle} order={2}>
          Tehtävät
        </Heading>
        <Stack gap={0}>
          {notes.map((note, index) => (
            <NoteItem key={index} note={note} />
          ))}
        </Stack>
      </Box>
    </PanelComponent>
  );
};

export default WallPanel;
