import { Container, Title, Text, Card, Group, Stack, Anchor, Image } from '@mantine/core';
import { IconBrandGithub, IconCode, IconSettings } from '@tabler/icons-react';
import baskoioLogo from 'src/components/assets/img/basko-io.png';

export const HomePage = () => {
  return (
    <Container size="md" mt="xl">
      <Stack>
        <Group>
          <Image src={baskoioLogo} radius="lg" fit="contain" h={100} />
          <Title order={1}>
            Basko.io
          </Title>
        </Group>

        <Text>


          Basko.io is a sandbox-website for hosting any stupid application ideas that might occur.
          The website is made with Vite.js and hosted in an ECS Cluster in AWS.
        </Text>

        <Title order={2}>🤓 Source code</Title>
        <Group align="flex-start" grow>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section withBorder inheritPadding py="xs">
              <Group>
                <IconCode size={24} />
                <Title order={3}>Client</Title>
              </Group>
            </Card.Section>

            <Stack mt="md">
              <Group>
                <IconBrandGithub size={20} />
                <Anchor href="https://github.com/basko-io/leo-client" target="_blank">
                  GitHub Repository
                </Anchor>
              </Group>
              <Text>
                Contains the client-side code for the project.
                The website is written in TypeScript with Vite.js, and is deployed to an Elastic Container Repostiroy in AWS using GitHub Actions.
              </Text>
            </Stack>
          </Card>

          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section withBorder inheritPadding py="xs">
              <Group>
                <IconSettings size={24} />
                <Title order={3}>Infrastructure</Title>
              </Group>
            </Card.Section>

            <Stack mt="md">
              <Group>
                <IconBrandGithub size={20} />
                <Anchor href="https://github.com/basko-io/leo-infrastructure" target="_blank">
                  GitHub Repository
                </Anchor>
              </Group>
              <Text>Houses the infrastructure code for the project. The infrastructure is configured in AWS using Terraform.</Text>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Container>
  );
};
