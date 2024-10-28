import { Note } from "../../../../../types";
import { Box, Flex, Link } from "@chakra-ui/react";
import dayjs from "../../../../../utils/time";

interface MessageProps {
  note: Note;
}

const NoteItem = (props: MessageProps) => {
  const { note } = props;

  return (
    <Flex marginBottom={2} direction="column">
      <Flex>
        <Link>
          <Box>{note.title}</Box>
        </Link>
      </Flex>
      <Box>{dayjs(note.created).format("LLL")}</Box>
    </Flex>
  );
};

export default NoteItem;
