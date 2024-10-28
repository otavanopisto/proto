import React, { useState } from "react";
import { Avatar, Popover, NavLink } from "@mantine/core";
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
    <Popover position="bottom" withArrow>
      <Popover.Target>
        <Avatar color="white">{locale.toUpperCase()}</Avatar>
      </Popover.Target>
      <Popover.Dropdown>
        {localeItems.map((item) => (
          <NavLink
            key={item.label}
            onClick={() => setLocale(item.value)}
            label={item.label}
          />
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};

export default LocaleDropdown;
