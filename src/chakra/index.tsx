import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/navigation";
import { NAVIGATION } from "../data/navigation.ts";
import { ANNOUNCEMENTS } from "../data/announcements.ts";
import { MESSAGES } from "../data/messages.ts";
import { WORKSPACES } from "../data/workspaces.ts";
import { NOTES } from "../data/notes.ts";
import { Center, Box, Grid, GridItem, extendTheme } from "@chakra-ui/react";
import WorkspacePanel from "./components/panels/workspaces/index.tsx";
import AnnouncementsPanel from "./components/panels/announcements/index.tsx";
import MessagesPanel from "./components/panels/messages/index.tsx";
import NotesPanel from "./components/panels/notes/index.tsx";

const theme = extendTheme({
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

const ChakraComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center bg="muikku.5">
        <Box maxW="80rem" marginRight={2} width="100%">
          <Navigation items={NAVIGATION} />
        </Box>
      </Center>
      <Center>
        <Box marginTop="0.5rem" padding={5} maxW="80rem" width="100%" as="main">
          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "1fr",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={7}
          >
            <GridItem>
              <WorkspacePanel workspaces={WORKSPACES} />
            </GridItem>
            <GridItem>
              <MessagesPanel messages={MESSAGES} />
              <NotesPanel notes={NOTES} />
            </GridItem>
            <GridItem>
              <AnnouncementsPanel announcements={ANNOUNCEMENTS} />
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default ChakraComponent;
