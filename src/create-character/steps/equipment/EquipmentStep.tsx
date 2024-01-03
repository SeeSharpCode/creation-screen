import { Accordion, MultiSelect, SimpleGrid } from '@mantine/core';
import { UseFormInput, UseFormReturnType } from '@mantine/form';
import { armor, powers, shouts, weapons } from '../../../shared/equipment';
import { IconFlame, IconLanguage, IconShield, IconSword } from '@tabler/icons-react';
import spells from '../../../shared/spells';
import { ReactNode } from 'react';

export interface EquipmentFormValues {
  Weapons: Record<string, string[]>;
  Armor: Record<string, string[]>;
  Spells: Record<string, string[]>;
  Shouts: string[];
  Powers: string[];
}

export default function EquipmentStep({ form }: { form: UseFormReturnType<EquipmentFormValues> }) {
  return (
    <Accordion>
      <CategorizedEquipmentForm title="Weapons" icon={<IconSword />} data={weapons} form={form} />
      <CategorizedEquipmentForm title="Armor" icon={<IconShield />} data={armor} form={form} />
      <CategorizedEquipmentForm title="Spells" icon={<IconFlame />} data={spells} form={form} />

      <Accordion.Item value="Shouts and Powers">
        <Accordion.Control icon={<IconLanguage />}>Shouts and Powers</Accordion.Control>
        <Accordion.Panel>
          <SimpleGrid cols={2}>
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
    },
  };
}
