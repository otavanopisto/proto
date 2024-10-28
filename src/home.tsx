import React from "react";
import {
  Card,
  Text,
  Button,
  Group,
  AppShell,
  MantineProvider,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const Home = () => {
  return (
    <MantineProvider>
      <AppShell header={{ height: "5rem" }}>
        <AppShell.Header c="yellow" p="md">
          <Text
            size="2rem"
            variant="gradient"
            gradient={{ from: "lime", to: "cyan", deg: 12 }}
          >
            Komponenttikirjastojen testailua
          </Text>
        </AppShell.Header>
        <AppShell.Main>
          <Carousel
            bg="gray"
            p="xl"
            withIndicators
            height={400}
            slideSize="600px"
            slideGap="xl"
            loop
            align="start"
            slidesToScroll={3}
          >
            <Carousel.Slide>
              <Card h="100%" shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section c="white" bg="blue" p="md">
                  <Title>Mantine</Title>
                </Card.Section>
                <Card.Section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                  p="md"
                >
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>
                      A fully featured React components library
                    </Text>
                    <Text size="sm" c="dimmed">
                      Build fully functional accessible web applications faster
                      than ever – Mantine includes more than 100 customizable
                      components and 50 hooks to cover you in any situation
                    </Text>
                  </Group>

                  <Button
                    component="a"
                    href="/mantine"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Vilkase
                  </Button>
                </Card.Section>
              </Card>
            </Carousel.Slide>
            <Carousel.Slide>
              <Card h="100%" shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section c="white" bg="indigo" p="md">
                  <Title>Chakra</Title>
                </Card.Section>
                <Card.Section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                  p="md"
                >
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>
                      Create accessible React apps with speed
                    </Text>
                    <Text size="sm" c="dimmed">
                      Chakra UI is a simple, modular and accessible component
                      library that gives you the building blocks you need to
                      build your React applications.
                    </Text>
                  </Group>

                  <Button
                    component="a"
                    href="/chakra"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Vilkase
                  </Button>
                </Card.Section>
              </Card>
            </Carousel.Slide>
          </Carousel>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default Home;
