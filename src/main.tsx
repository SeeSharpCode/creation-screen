import { AppShell, Avatar, Button, Container, Group, MantineProvider, Stack, Text, Title, Image } from '@mantine/core';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import CharacterDetail from './character-detail/CharacterDetail';
import CharacterList from './character-list/CharacterList';
import CreateCharacterStepper from './create-character/CreateCharacterStepper';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import mockData from './mock-data';
import '@mantine/core/styles.css';
import { Character } from './shared/character';

// TODO consistent function expressions/bodies throughout the app

function AppHeader() {
  return (
    <Container size="xl">
      <Group py="xs" justify="space-between" pb="xs">
        <Group gap="sm">
          <Image src="/logo.png" alt="Creation Screen" width="60" height="60" />
          <Stack gap={0} justify="center">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              <Title order={2}>Creation Screen</Title>
            </Link>
            <Text size="sm" c="dimmed">
              It&apos;s like match.com for stealth archers
            </Text>
          </Stack>
        </Group>
        <Group>
          <Button component="a" href="/characters/create" size="sm">
            Create a Build
          </Button>
          <Avatar radius="xl" color="orange">
            CS
          </Avatar>
        </Group>
      </Group>
    </Container>
  );
}

function App() {
  const [characters, setCharacters] = useState<Character[]>(mockData);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppShell header={{ height: 80 }}>
          <AppShell.Header>
            <AppHeader />
          </AppShell.Header>
          <AppShell.Main>
            <Container size="xl" mt="md">
              <Outlet />
            </Container>
          </AppShell.Main>
        </AppShell>
      ),
      children: [
        { index: true, element: <CharacterList characters={characters} /> },
        {
          path: 'characters/:characterId',
          element: <CharacterDetail />,
          loader: ({ params }) => {
            const character = mockData.find(c => c.id === Number(params.characterId));
            return { character };
          },
        },
        {
          path: 'characters/create',
          element: <CreateCharacterStepper setCharacters={setCharacters} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
