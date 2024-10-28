import React from "react";
import styles from "./navigation-button.module.css";
import { ActionIcon, Tooltip, Indicator } from "@mantine/core";

interface NavigationButtonProps {
  label: string;
  icon: string;
  indicator?: boolean;
  url?: string;
  onClick?: () => void;
}

const NavButton = (props: NavigationButtonProps) => {
  const { label, icon, indicator, onClick, url = "/" } = props;
  return (
    <Tooltip label={label} position="bottom">
      <ActionIcon
        onClick={onClick ? onClick : () => (window.location.href = url)}
        className={styles.icon}
        title={label}
      >
        {indicator ? (
          <Indicator
            inline
            processing
            position="bottom-end"
            color="red"
            size={12}
          >
            <span className={`icon-${icon}`} />
          </Indicator>
        ) : (
          <span className={`icon-${icon}`} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default NavButton;
