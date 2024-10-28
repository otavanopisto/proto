import React from "react";
import { Box, Stack, NavLink, Title, Badge } from "@mantine/core";
import styles from "./workspace.module.css";
import { WorkspaceData } from "../../../../types";
interface WorkspacePanelProps {
  workspaces: WorkspaceData[];
}

const WorkspacePanel = (props: WorkspacePanelProps) => {
  const { workspaces } = props;
  return (
    <>
      <Box className={styles.title}>
        <Badge circle className={styles.titleIcon}>
          <span className="icon-books"></span>
        </Badge>
        <Title order={1} className={styles.titleText}>
          Kurssit
        </Title>
      </Box>
      <Box className={styles.container}>
        <Box>
          <Title className={styles.subtitle} order={2}>
            Jatka opintoja
          </Title>
          <Stack gap={0}>
            {workspaces.map((workspace, index) => (
              <NavLink
                leftSection={<span className="icon-forward" />}
                label={workspace.name}
                description="Olit viimeksi kohdassa: Mantine toimii"
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Title className={styles.subtitle} order={2}>
            Kurssisi
          </Title>
          <Stack gap={0}>
            {workspaces.map((workspace, index) => (
              <NavLink
                leftSection={<span className="icon-books" />}
                label={workspace.name}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default WorkspacePanel;
