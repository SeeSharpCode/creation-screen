import { Badge, Button, Grid, Group, Image, Text, Title } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Character } from '../shared/character';

export default function CharacterHeader({ character }: { character: Character }) {
  console.log('imageUrl', character.media.image);
  return (
    <Grid columns={2} mt="xs">
      <Grid.Col span={1}>
        {/* <Image src="https://picsum.photos/1920/1080" /> */}
        <Image src={character.media.image} />
      </Grid.Col>
      <Grid.Col span={1}>
        <Group>
          <Title order={1}>{character.name}</Title>
          {character.isModded && (
            <Badge style={{ alignSelf: 'center' }} color="orange">
              modded
            </Badge>
          )}
        </Group>
        <Text>
          Created by{' '}
          <Link to="#" target="_blank">
            {character.author}
          </Link>
        </Text>
        <Button mt={3} p={0} size="xs" variant="subtle" leftSection={<IconHeart />}>
          Favorite
        </Button>
        <Text>
          <Text span c="dimmed">
            Sex:
          </Text>{' '}
          {character.sex}
        </Text>
        <Text>
          <Text span c="dimmed">
            Race:
          </Text>{' '}
          {character.race}
        </Text>
        <Text mb="sm">
          <Text span c="dimmed">
            Standing stone:
          </Text>{' '}
          {character.equipment.standingStone}
        </Text>
        <Text mt="xs">{character.summary}</Text>
      </Grid.Col>
    </Grid>
  );
}
