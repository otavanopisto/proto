import React from "react";
import { Box, Stack, Flex, Center, Heading, Badge } from "@chakra-ui/react";

interface WorkspacePanelProps {
  children?: React.ReactNode;
  title?: string;
  icon?: string;
}

const PanelComponent = (props: WorkspacePanelProps) => {
  const { children, title, icon } = props;
  return (
    <Box padding={3} boxShadow="md">
      <Flex>
        <Center>
          <span className={`icon-${icon}`}></span>
          <Heading>{title}</Heading>
        </Center>
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
};

export default PanelComponent;
