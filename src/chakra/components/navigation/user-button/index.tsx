import React from "react";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { NavigationItem } from "../../../../types";

interface AvatarButtonProps {
  name: string;
  image?: string;
  items: NavigationItem[];
}

const AvatarDropdown = (props: AvatarButtonProps) => {
  const { name, image, items } = props;
  return (
    <Menu>
      <MenuButton>
        <Avatar src={image} name={name} color="white" />
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            key={item.label}
            icon={<span className={`icon-${item.icon}`} />}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
