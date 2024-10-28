// import React from "react";
import { Box, Stack, NavLink, Title, Badge } from "@mantine/core";
import styles from "./workspace.module.css";
import MyComponent from "../../myComponent";

const CustomComponent = () => {
  return (
    <>
      <Box className={styles.title}>
        <Badge circle className={styles.titleIcon}>
          <span className="icon-compass"></span>
        </Badge>
        <Title order={1} className={styles.titleText}>
          Kustomoitu paneeli
        </Title>
      </Box>
      <Box className={styles.container}>
        <MyComponent />
      </Box>
    </>
  );
};

export default CustomComponent;
