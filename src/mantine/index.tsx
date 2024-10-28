import React from "react";
import styles from "./App.module.css";
import {
  MantineProvider,
  createTheme,
  NavLink,
  Stack,
  Button,
  Avatar,
  AppShell,
  Grid,
} from "@mantine/core";

import Navigation from "./components/navigation";
import WorkspacePanel from "./components/panels/workspaces";
import WallPanel from "./components/panels/notes";
import MessagesPanel from "./components/panels/messages";
import AnnouncementsPanel from "./components/panels/announcements";
import ImportantPanel from "./components/panels/important";
import CustomComponent from "./components/panels/custom/index.tsx";
import { Notifications } from "@mantine/notifications";
import { Spotlight, SpotlightActionGroupData } from "@mantine/spotlight";
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";
import { NAVIGATION } from "../data/navigation.ts";
import { ANNOUNCEMENTS } from "../data/announcements.ts";
import { MESSAGES } from "../data/messages.ts";
import { WORKSPACES } from "../data/workspaces.ts";
import { NOTES } from "../data/notes.ts";

const actions: SpotlightActionGroupData[] = [
  {
    group: "Toiminnot",
    actions: [
      {
        id: "message",
        label: "Luo uusi viesti",
        description: "Luo uusi viesti",
        leftSection: <span className="icon-envelope" />,
        onClick: () => console.log("Home"),
      },
      {
        id: "note",
        label: "Luo uusi tehtävä",
        description: "Luo uusi tehtävä",
        leftSection: <span className="icon-note" />,
        onClick: () => console.log("Dashboard"),
      },
      {
        id: "contact",
        label: "Luo yhteydenotto",
        description: "Luo uusi yhteydenotto opiskelijalle",
        leftSection: <span className="icon-bubbles" />,
        onClick: () => console.log("Documentation"),
      },
      {
        id: "kurssi 1",
        label: "Kurssi 1",
        description: "Siirry kurssille 1",
        onClick: () => console.log("Documentation"),
        leftSection: <span className="icon-books" />,
      },
      {
        id: "opiskelija 1",
        label: "Opiskelija 1",
        description: "Tarkastele opiskelijaa 1",
        leftSection: <Avatar>AA </Avatar>,
        onClick: () => console.log("Documentation"),
      },
    ],
  },
  {
    group: "Kurssit",
    actions: [
      {
        id: "coursepicker",
        label: "Kursseja sinulle",
        closeSpotlightOnTrigger: false,
        children: (
          <Stack>
            <NavLink
              leftSection={<span className="icon-books" />}
              label="Kurssi 13"
            >
              <Button>Ilmoittaudu</Button>
            </NavLink>
            <NavLink
              leftSection={<span className="icon-books" />}
              label="Kurssi 14"
            >
              <Button>Ilmoittaudu</Button>
            </NavLink>
            <NavLink
              leftSection={<span className="icon-books" />}
              label="Kurssi 15"
            >
              <Button>Ilmoittaudu</Button>
            </NavLink>
            <NavLink
              leftSection={<span className="icon-books" />}
              label="Kurssi 16"
            >
              <Button>Ilmoittaudu</Button>
            </NavLink>
          </Stack>
        ),
      },
    ],
  },
];

const theme = createTheme({
  breakpoints: {
    xs: "0",
    sm: "40em",
    md: "48em",
    lg: "64em",
    xl: "75em",
  },
  colors: {
    muikku: [
      "oklch(97.02% 0.01586763625257118 239.10060512063058)",
      "oklch(90.98% 0.05007231460381193 237.30469801517762)",
      "oklch(84.86% 0.08535479355188935 238.05606222293343)",
      "oklch(78.8% 0.12278228822584512 237.63685732785092)",
      "oklch(72.65% 0.143 237.78)",
      "oklch(66.68% 0.1472 237.86)",
      "oklch(57.59% 0.1276 237.98)",
      "oklch(45.39% 0.1002 237.76)",
      "oklch(32.36% 0.072 238.26)",
      "oklch(21.07% 0.0464 237.59)",
    ],
  },
});

const MantineComponent = () => {
  const switchPanel = (panel: number) => {
    switch (panel) {
      case 1:
        return <WorkspacePanel workspaces={WORKSPACES} />;
      case 2:
        return (
          <>
            <WallPanel notes={NOTES} />
            <MessagesPanel messages={MESSAGES} />
          </>
        );
      case 3:
        return (
          <>
            <CustomComponent />
            <AnnouncementsPanel announcements={ANNOUNCEMENTS} />
          </>
        );
    }
  };
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Spotlight actions={actions} />
      <AppShell>
        <AppShell.Header className={styles.header}>
          <Navigation items={NAVIGATION} />
        </AppShell.Header>
        <AppShell.Main className={styles.main}>
          <Grid gutter={{ base: 5, md: "xl" }}>
            <Grid.Col span={12}>
              <ImportantPanel />
            </Grid.Col>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid.Col
                key={"kolumni" + index}
                span={{ base: 12, sm: 6, md: 4 }}
              >
                {switchPanel(index + 1)}
              </Grid.Col>
            ))}
          </Grid>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default MantineComponent;
