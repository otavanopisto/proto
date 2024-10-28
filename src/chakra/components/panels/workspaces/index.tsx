import React from "react";
import { Center, Box, Flex, Stack, Heading } from "@chakra-ui/react";
import { WorkspaceData } from "../../../../types";
import Workspace from "./workspace";
import styles from "./workspace.module.css";
import PanelComponent from "../panel";

interface WorkspacePanelProps {
  workspaces: WorkspaceData[];
}

const WorkspacePanel = (props: WorkspacePanelProps) => {
  const { workspaces } = props;
  return (
    <PanelComponent title="Kurssit" icon="books">
      <Box className={styles.container}>
        {workspaces.map((workspace, index) => (
          <Workspace key={index} workspace={workspace} continueStudies={true} />
        ))}
        <Box>
          <Heading>Kurssisi</Heading>
          <Stack gap={0}>
            {workspaces.map((workspace, index) => (
              <Workspace
                key={index}
                workspace={workspace}
                continueStudies={false}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </PanelComponent>
  );
};

export default WorkspacePanel;
