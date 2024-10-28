import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
const localeItems = [
  {
    label: "Suomi",
    value: "fi",
  },
  {
    label: "English",
    value: "en",
  },
];

const LocaleDropdown = () => {
  const [locale, setLocale] = useState("fi");
  return (
    <Menu>
      <MenuButton>
        <IconButton
          as="div"
          isRound={true}
          aria-label={locale}
          icon={<span>{locale.toUpperCase()}</span>}
        />
      </MenuButton>
      <MenuList>
        {localeItems.map((item) => (
          <MenuItem key={item.label} onClick={() => setLocale(item.value)}>
            {item.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LocaleDropdown;
