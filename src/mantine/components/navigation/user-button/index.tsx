import React from "react";
import { Avatar, Menu, NavLink } from "@mantine/core";
import { NavigationItem } from "../../../../types";

interface AvatarButtonProps {
  name: string;
  image?: string;
  items: NavigationItem[];
}

const AvatarDropdown = (props: AvatarButtonProps) => {
  const { name, image, items } = props;
  const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();
  return (
    <Menu position="bottom" withArrow>
      <Menu.Target>
        <Avatar src={image} alt={name} color="white">
          {getFirstLetter(name)}
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            leftSection={<span className={`icon-${item.icon}`} />}
          />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default AvatarDropdown;
