import React from "react";
import {
  Center,
  Tooltip,
  Box,
  Spacer,
  Link,
  Flex,
  useDisclosure,
  Drawer,
  IconButton,
  Stack,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

// import styles from "./navigation.module.css";
import NavButton from "./navigation-button";
import UserButton from "./user-button";
import LocaleDropdown from "./locale-button";
// import { spotlight } from "@mantine/spotlight";
import { NavigationItem } from "../../../types/index";

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation = (props: NavigationProps) => {
  const { items } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const drawerTitle = (
    <Box>
      <img
        src={"/gfx/oo-branded-site-logo-text-white.png"}
        width="175"
        alt={"Etusivu"}
      />
    </Box>
  );

  return (
    <Box>
      <Flex display={["none", "none", "flex"]}>
        <Tooltip label="Etusivu">
          <Link href="/">
            <img
              src={"/gfx/oo-branded-site-logo-text-white.png"}
              width="175"
              alt={"Etusivu"}
            />
          </Link>
        </Tooltip>
        <Flex basis="100%">
          <Center width="100%">
            <Box flexGrow="0" as="nav">
              {items.map((item) => (
                <NavButton key={item.label} {...item} />
              ))}
            </Box>
            <Spacer />
            <Flex>
              <UserButton name="Antti" items={items} />
              <LocaleDropdown />
            </Flex>
          </Center>
        </Flex>
      </Flex>
      <Flex display={["flex", "flex", "none"]}>
        <Flex basis="100%">
          <Center width="100%">
            <IconButton
              onClick={onOpen}
              aria-label="hamburger"
              icon={<HamburgerIcon />}
              fontSize="2rem"
              color={"white"}
              background={"transparent"}
              h="3.1rem"
              w="3.1rem"
              _hover={{
                color: "muikku.5",
                background: "white",
              }}
            />
            <Drawer
              isFullHeight={true}
              placement="left"
              isOpen={isOpen}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader padding="0" background="muikku.5">
                  <img
                    src={"/gfx/oo-branded-site-logo-text-white.png"}
                    width="175"
                    alt={"Etusivu"}
                  />
                  <DrawerCloseButton color="white" onClick={onClose} />
                </DrawerHeader>
                <DrawerBody>
                  <Stack>
                    {items.map((item) => (
                      <Link key={item.label} {...item}>
                        <Box as="span" className={`icon-${item.icon}`} />{" "}
                        {item.label}
                      </Link>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Spacer />
            <Flex>
              <LocaleDropdown />{" "}
            </Flex>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
