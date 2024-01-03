import { Accordion, Box, Card, Divider, Grid, List, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import equipmentIcons from './equipment-icons';
import { Character, Equipment, Roleplay } from '../shared/character';
import { ReactNode } from 'react';
import { PerkTrees } from '../shared/perks';
import { IconFlame, IconLanguage } from '@tabler/icons-react';
import { questlineIcons } from '../shared/questlines';

export default function DetailBody({ character }: { character: Character }) {
  return (
    <Stack mt="sm">
      <Section title="Backstory">
        <Text>{character.roleplay.backstory}</Text>
      </Section>
      <Section title="Roleplay">
        <RoleplaySection roleplay={character.roleplay} />
      </Section>
      <Section title="Perks">
        <PerksSection perks={character.perks} />
      </Section>
      <Section title="Equipment">
        <EquipmentSection equipment={character.equipment} />
      </Section>
      <Section title="Gameplay Notes">{character.roleplay.gameplayNotes}</Section>
    </Stack>
  );
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <>
    <Divider label={<Text size="lg">{title}</Text>} />
    <Box>{children}</Box>
  </>
);

const RoleplaySection = ({ roleplay }: { roleplay: Roleplay }) => (
  <Grid gutter="lg" columns={4}>
    <Grid.Col span={1}>
      <Card h="100%">
        <Title order={5} mb="xs">
          Questlines
        </Title>
        <List center>
          {roleplay.questlines?.map(questline => (
            <List.Item key={questline} icon={questlineIcons[questline]}>
              {questline}
            </List.Item>
          ))}
        </List>
      </Card>
    </Grid.Col>
    <Grid.Col span={3}>
      <Text>{roleplay.roleplay}</Text>
    </Grid.Col>
  </Grid>
);

const PerksSection = ({ perks }: { perks: PerkTrees }) => (
  <SimpleGrid>
    {Object.entries(perks).map(([skill, perkTree]) => (
      <Accordion variant="contained" key={skill}>
        <Accordion.Item value={skill}>
          <Accordion.Control>{skill}</Accordion.Control>
          <Accordion.Panel>
            <List center>
              {Object.entries(perkTree).map(([name, perk]) => (
                <List.Item key={name}>{perk.description}</List.Item>
              ))}
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    ))}
  </SimpleGrid>
);

const EquipmentSection = ({ equipment }: { equipment: Equipment }) => (
  <SimpleGrid cols={4}>
    <Card>
      <Title order={5} mb="xs">
        Weapons
      </Title>
      <List center>
        {Object.entries(equipment.weapons ?? {}).map(([category, weapons]) =>
          weapons.map(name => (
            <List.Item key={name} icon={equipmentIcons[category]}>
              {name}
            </List.Item>
          ))
        )}
      </List>
    </Card>
    <Card>
      <Title order={5} mb="xs">
        Armor
      </Title>
      <List center>
        {Object.entries(equipment.armor ?? {}).map(([category, armor]) =>
          armor.map(name => (
            <List.Item key={name} icon={equipmentIcons[category]}>
              {name}
            </List.Item>
          ))
        )}
      </List>
    </Card>
    <Card>
      <Title order={5} mb="xs">
        Spells
      </Title>
      <List center>
        {Object.entries(equipment.spells ?? {}).map(([school, spells]) =>
          spells.map(name => (
            <List.Item key={name} icon={<IconFlame />}>
              {name}
            </List.Item>
          ))
        )}
      </List>
    </Card>
    <Card>
      <Title order={5} mb="xs">
        Shouts & Powers
      </Title>
      <List center>
        {[...(equipment.shouts ?? []), ...(equipment.powers ?? [])].map(item => (
          <List.Item key={item} icon={<IconLanguage />}>
            {item}
          </List.Item>
        ))}
      </List>
    </Card>
  </SimpleGrid>
);
