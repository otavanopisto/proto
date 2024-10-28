import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Announcement } from "../../../../../types";

interface AnnouncementProps {
  announcement: Announcement;
}

const AnnouncementItem = (props: AnnouncementProps) => {
  const { announcement } = props;

  return (
    <Flex marginBottom={2} direction="column">
      <Flex>
        <span className="icon-paper-plane" />
        <Link>
          <Box>{announcement.caption}</Box>
        </Link>
      </Flex>
      <Box>{announcement.created}</Box>
    </Flex>
  );
};

export default AnnouncementItem;
