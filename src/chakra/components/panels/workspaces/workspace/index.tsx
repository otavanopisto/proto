import { WorkspaceData } from "../../../../../types";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

interface WorkspaceProps {
  workspace: WorkspaceData;
  continueStudies: boolean;
}

const Workspace = (props: WorkspaceProps) => {
  const { workspace, continueStudies } = props;

  return (
    <Flex direction="column">
      <Flex>
        {continueStudies ? (
          <span className="icon-forward" />
        ) : (
          <span className="icon-books" />
        )}
        <Link>
          <Box>{workspace.nameExtension + workspace.name}</Box>
        </Link>
      </Flex>
      {continueStudies ? (
        <Box>Olit viimeksi kohdassa: Miksi ja minne?</Box>
      ) : null}
    </Flex>
  );
};

export default Workspace;
