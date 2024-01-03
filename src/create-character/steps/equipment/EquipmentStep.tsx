import { Accordion, MultiSelect, Select, SimpleGrid } from '@mantine/core';
import { UseFormInput, UseFormReturnType } from '@mantine/form';
import { armor, weapons } from '../../../shared/equipment';
import { IconFlame, IconLanguage, IconShield, IconSword } from '@tabler/icons-react';
import spells from '../../../shared/spells';
import { ReactNode } from 'react';

export interface EquipmentFormValues {
  Weapons: Record<string, string[]>;
  Armor: Record<string, string[]>;
  Spells: Record<string, string[]>;
  Shouts: string[];
  Powers: string[];
  standingStone: string;
}

export default function EquipmentStep({ form }: { form: UseFormReturnType<EquipmentFormValues> }) {
  return (
    <Accordion>
      <CategorizedEquipmentForm title="Weapons" icon={<IconSword />} data={weapons} form={form} />
      <CategorizedEquipmentForm title="Armor" icon={<IconShield />} data={armor} form={form} />
      <CategorizedEquipmentForm title="Spells" icon={<IconFlame />} data={spells} form={form} />

      <Accordion.Item value="Abilities">
        <Accordion.Control icon={<IconLanguage />}>Abilities</Accordion.Control>
        <Accordion.Panel>
          <SimpleGrid cols={3}>
            <MultiSelect
              {...form.getInputProps('Shouts')}
              data={shouts}
              label="Shouts"
              placeholder="Select shouts"
              searchable
              nothingFoundMessage="Nothing found"
            />
            <MultiSelect
              {...form.getInputProps('Powers')}
              data={powers}
              label="Powers"
              placeholder="Select powers"
              searchable
              nothingFoundMessage="Nothing found"
            />
            <Select
              label="Standing Stone"
              placeholder="Pick The Lord Stone. I know you will."
              {...form.getInputProps('standingStone')}
              data={standingStoneOptions}
            />
          </SimpleGrid>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function CategorizedEquipmentForm({
  title,
  icon,
  data,
  form,
}: {
  title: string;
  icon: ReactNode;
  data: Record<string, string[]>;
  form: UseFormReturnType<EquipmentFormValues>;
}) {
  return (
    <Accordion.Item value={title}>
      <Accordion.Control icon={icon}>{title}</Accordion.Control>
      <Accordion.Panel>
        <SimpleGrid cols={3}>
          {Object.entries(data).map(([type, names]) => (
            <MultiSelect
              key={type}
              data={names}
              label={type}
              placeholder={`Select ${type}`}
              searchable
              nothingFoundMessage="Nothing found"
              onChange={value => form.setFieldValue(`${title}.${type}`, value)}
            />
          ))}
        </SimpleGrid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function createEquipmentForm(): UseFormInput<EquipmentFormValues> {
  return {
    initialValues: {
      Weapons: {},
      Armor: {},
      Spells: {},
      Shouts: [],
      Powers: [],
      standingStone: '',
    },
  };
}

const powers = ['Battle Cry', 'Nightingale Subterfuge', 'Nightingale Strife'];

const standingStoneOptions = [
  'The Lord Stone',
  'The Lady Stone',
  'The Atronach Stone',
  'The Apprentice Stone',
  'The Ritual Stone',
  'The Lover Stone',
  'The Shadow Stone',
];

const shouts = [
  'Unrelenting Force',
  'Fire Breath',
  'Ice Form',
  'Storm Call',
  'Dragonrend',
  'Soul Tear',
  'Call Dragon',
  'Call of Valor',
  'Clear Skies',
  'Disarm',
  'Dismay',
  'Dragon Aspect',
  'Elemental Fury',
  'Become Ethereal',
  'Aura Whisper',
  'Animal Allegiance',
  'Throw Voice',
  'Whirlwind Sprint',
  "Kyne's Peace",
  'Marked for Death',
  'Slow Time',
];
