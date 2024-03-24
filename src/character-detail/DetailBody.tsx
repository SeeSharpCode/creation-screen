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

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (<>
    <Divider label={<Text size="lg">{title}</Text>} />
    <Box>{children}</Box>
  </>);
}

function RoleplaySection({ roleplay }: { roleplay: Roleplay }) {
  return (<Grid gutter="lg" columns={4}>
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
  </Grid>);
}

function PerksSection({ perks }: { perks: PerkTrees; }) {
  return (
    <SimpleGrid cols={4}>
      {Object.entries(perks).map(([skill, perkTree]) => (
        <Accordion variant="contained" key={skill}>
          <Accordion.Item value={skill}>
            <Accordion.Control>{skill}</Accordion.Control>
            <Accordion.Panel>
              <List center spacing="xs">
                {Object.entries(perkTree).map(([name, perk]) => (
                  <List.Item key={name} style={{ listStyleType: 'none' }}>
                    <Text>{name}</Text>
                    <Text c="dimmed">{perk.description}</Text>
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </SimpleGrid>
  );
}

function EquipmentSection({ equipment }: { equipment: Equipment; }) {
  return (
    <SimpleGrid cols={4}>
      <Card>
        <Title order={5} mb="xs">
          Weapons
        </Title>
        <List center>
          {Object.entries(equipment.weapons ?? {}).map(([category, weapons]) => weapons.map(name => (
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
          {Object.entries(equipment.armor ?? {}).map(([category, armor]) => armor.map(name => (
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
          {Object.entries(equipment.spells ?? {}).map(([school, spells]) => spells.map(name => (
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
}
