import { AppShell, Checkbox, Group, MultiSelect, SimpleGrid, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { Character, getSkills } from '../shared/character';

export default function CharacterList({ characters }: { characters: Character[] }) {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  const skillOptions = Array.from(new Set(filteredCharacters.flatMap(getSkills)));

  const [skills, setSkills] = useState<string[]>([]);
  const [vanillaOnly, setVanillaOnly] = useState(false);

  useEffect(() => {
    const filtered = characters.filter(character => {
      if (vanillaOnly && character.isModded) {
        return false;
      }
      if (skills && !skills.every(s => getSkills(character).includes(s))) {
        return false;
      }
      return true;
    });
    setFilteredCharacters(filtered);
  }, [characters, vanillaOnly, skills]);

  return (
    <>
      <Group align="flex-start">
        {/* <AppShell.Navbar miw={200} pr="md" visibleFrom="md">
          <Title order={3} mb="md">
            Filters
          </Title>
          <MultiSelect
            data={skillOptions}
            label="Skills"
            placeholder="Choose skills"
            value={skills}
            onChange={setSkills}
          />
          <Checkbox
            mt="md"
            label="Hide modded builds"
            checked={vanillaOnly}
            onChange={event => {
              const checked = event.currentTarget.checked;
              setVanillaOnly(checked);
            }}
          />
        </AppShell.Navbar> */}
        <SimpleGrid spacing="xs" cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {filteredCharacters.map(character => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </SimpleGrid>
      </Group>
    </>
  );
}
