import { Anchor, Badge, Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Character, getSkills } from '../shared/character';

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Card shadow="sm" padding="md" radius={0} style={{ display: 'flex', flexDirection: 'column' }} withBorder>
      <Card.Section>
        <Image src="https://picsum.photos/265/150" alt="Norway" />
      </Card.Section>
      <Group justify="space-between" mt="xs">
        <Title order={5}>{character.name}</Title>
        {character.isModded && <Badge color="orange">modded</Badge>}
      </Group>
      <Text size="xs" mb="sm">
        Created by{' '}
        <Anchor href="#" target="_blank">
          {character.author}
        </Anchor>
      </Text>

      <Text size="sm" lineClamp={8}>
        {character.summary}
      </Text>
      <Stack style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <Group mt="xs">
          {Array.from(new Set(getSkills(character))).map(skill => (
            <Badge size="sm" key={skill}>
              {skill}
            </Badge>
          ))}
        </Group>
        <Group justify="space-between">
          <Link to={`/characters/${character.id}`}>View</Link>
          <Group>
            <IconHeartFilled size="1rem" />
            <Text>334</Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}
