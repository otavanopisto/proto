import React from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";

interface NavigationButtonProps {
  label: string;
  icon: string;
  indicator?: boolean;
  url?: string;
  onClick?: () => void;
}

const NavButton = (props: NavigationButtonProps) => {
  const { label, icon, onClick, url = "/chakra" } = props;
  return (
    <Tooltip label={label}>
      <IconButton
        fontSize="2rem"
        color={"white"}
        background={"transparent"}
        h="3.1rem"
        w="3.1rem"
        _hover={{
          color: "muikku.5",
          background: "white",
        }}
        onClick={onClick ? onClick : () => (window.location.href = url)}
        title={label}
        aria-label={label}
      >
        <span className={`icon-${icon}`} />
      </IconButton>
    </Tooltip>
  );
};

export default NavButton;
