import React from "react";
import { Tooltip, Anchor, Box, Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./navigation.module.css";
import NavigationButton from "./navigation-button";
import AvatarDropdown from "./user-button";
import LocaleDropdown from "./locale-button";
import { spotlight } from "@mantine/spotlight";
import { NavigationItem } from "../../../types/index";

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation = (props: NavigationProps) => {
  const { items } = props;
  const [opened, { toggle, close }] = useDisclosure();
  const drawerTitle = (
    <Box className={styles.drawerTitle}>
      <img
        src={"/gfx/oo-branded-site-logo-text-white.png"}
        width="175"
        alt={"Etusivu"}
      />
    </Box>
  );
  return (
    <>
      <Box visibleFrom="md" className={styles.container}>
        <Tooltip key="frontpage" label="Etusivu">
          <Anchor href="/">
            <img
              src={"/gfx/oo-branded-site-logo-text-white.png"}
              width="175"
              alt={"Etusivu"}
            />
          </Anchor>
        </Tooltip>
        <Box component="nav">
          <Box className={styles.buttons}>
            {items.map((item) => (
              <NavigationButton key={item.label} {...item} />
            ))}
            <NavigationButton
              label="Haku"
              icon="search"
              onClick={spotlight.open}
            ></NavigationButton>
          </Box>
          <Box className={styles.settings}>
            <AvatarDropdown name="Antti" items={items} />
            <LocaleDropdown />
          </Box>
        </Box>
      </Box>
      <Box hiddenFrom="md" className={styles.mobileContainer}>
        <Tooltip key="frontpage" label="Etusivu">
          <Burger color="white" opened={opened} onClick={toggle} />
        </Tooltip>
        <Drawer
          classNames={{ header: styles.drawerHeader }}
          hiddenFrom="md"
          onClose={close}
          opened={opened}
          title={drawerTitle}
        >
          <Box>
            <Box className={styles.buttons}>
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  label={item.label}
                  leftSection={<span className={`icon-${item.icon}`} />}
                />
              ))}
            </Box>
          </Box>
        </Drawer>
        <Box className={styles.settings}>
          <LocaleDropdown />
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
