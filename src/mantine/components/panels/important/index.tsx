import React from "react";
import { Box, Group, Stepper, Button, Text, Title, Badge } from "@mantine/core";
import styles from "./important.module.css";
import { notifications } from "@mantine/notifications";
import { Carousel } from "@mantine/carousel";

const ImportantPanel = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = () => {
    setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));

    if (activeStep === 3) {
      notifications.show({
        title: "Olet valmis!",
        message: "Onnea opintoihisi!",
        color: "teal",
      });
    }
  };

  const handleReset = () => {
    setActiveStep(0);

    notifications.show({
      title: "Homma resetoitu!",
      message: "Onnea opintoihisi!",
      color: "teal",
    });
  };
  return (
    <>
      <Box className={styles.title}>
        <Badge color="red" circle className={styles.titleIcon}>
          <span className="icon-clock"></span>
        </Badge>
        <Title order={1} className={styles.titleText}>
          Tärkeää
        </Title>
        <Box className={styles.titleAction}>
          <Button onClick={handleReset}>Nollaa askeleet</Button>
        </Box>
      </Box>
      <Box className={styles.container}>
        <Stepper active={activeStep}>
          <Stepper.Step
            label="Juttele ohjaajalle"
            description="Varaa ohjausaika"
          >
            <Text>Ota yhteyttä ohjaajaasi ja varaa aika keskustelulle</Text>
            <Button onClick={handleStep}>Varaa aika</Button>
          </Stepper.Step>
          <Stepper.Step label="Täytä HOPS" description="HOPS-lomake">
            <Text>Täytä HOPS-lomake ohjaajasi kanssa tai itsenäisesti</Text>
            <Button onClick={handleStep}>Täytä HOPS</Button>
          </Stepper.Step>
          <Stepper.Step
            label="Ilmoittaudu kursseille"
            description="Opiskele ihan muikkuna"
          >
            Ilmoittaudu kursseille ja saat täyden pääsyn opintoihisi!
            <Carousel
              slideSize="70%"
              height={200}
              slideGap="xl"
              controlSize={40}
              withIndicators
              bg="muikku.1"
            >
              <Carousel.Slide>
                <Box className={styles.workspace}>
                  <Title>Kurssi 1</Title>
                  <Text>Kurssi yhden kuvaus</Text>
                  <Group>
                    <Button onClick={handleStep}>Ilmoittaudu kurssille</Button>
                    <Button disabled>Tutustu kurssiin</Button>
                  </Group>
                </Box>
              </Carousel.Slide>
              <Carousel.Slide>
                <Box className={styles.workspace}>
                  <Title>Kurssi 2</Title>
                  <Text>
                    Kurssi Kahden kuvaus. Tällä kurssilla opiskellaan, mitä nyt
                    opiskellaan
                  </Text>
                  <Group>
                    <Button onClick={handleStep}>Ilmoittaudu kurssille</Button>
                    <Button disabled>Tutustu kurssiin</Button>
                  </Group>
                </Box>
              </Carousel.Slide>
              <Carousel.Slide>
                <Box className={styles.workspace}>
                  <Title>Kurssi 3</Title>
                  <Text>Kurssi Kolmen kuvaus.</Text>
                  <Group>
                    <Button onClick={handleStep}>Ilmoittaudu kurssille</Button>
                    <Button disabled>Tutustu kurssiin</Button>
                  </Group>
                </Box>
              </Carousel.Slide>
            </Carousel>
          </Stepper.Step>
          <Stepper.Completed>Olet valmis! Kohti opintoja!</Stepper.Completed>
        </Stepper>
      </Box>
    </>
  );
};

export default ImportantPanel;
