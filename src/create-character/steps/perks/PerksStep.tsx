import { Accordion, Alert, Checkbox, SimpleGrid, Tabs } from '@mantine/core';
import { IconBow, IconExclamationCircle, IconFlame, IconShieldHalf } from '@tabler/icons-react';
import { ReactElement } from 'react';
import { PerkTree, PerkTrees, magePerks, thiefPerks, warriorPerks } from '../../../shared/perks';
import { UseFormInput, UseFormReturnType } from '@mantine/form';

const treeIcons: Record<string, ReactElement> = {
  Thief: <IconBow />,
  Warrior: <IconShieldHalf />,
  Mage: <IconFlame />,
};

// It's simpler to use string[] instead of PerkTrees for the MultiSelect
// The string arrays are converted to PerkTrees in the onSubmit handler
export type PerkFormValues = Record<string, string[]>;

export default function PerksStep({ form }: { form: UseFormReturnType<PerkFormValues> }) {
  return (
    <>
      {Object.keys(form.errors).length > 0 && (
        <Alert w="50%" mt="xs" variant="light" color="red" title="No perks selected" icon={<IconExclamationCircle />}>
          Please select at least one perk.
        </Alert>
      )}

      <PerkGroup name="Thief" perkTrees={thiefPerks} form={form} />
      <PerkGroup name="Warrior" perkTrees={warriorPerks} form={form} />
      <PerkGroup name="Mage" perkTrees={magePerks} form={form} />
    </>
  );
}

function PerkGroup({
  name,
  perkTrees,
  form,
}: {
  name: string;
  perkTrees: PerkTrees;
  form: UseFormReturnType<PerkFormValues>;
}) {
  return (
    <Accordion key={name}>
      <Accordion.Item key={name} value={name}>
        <Accordion.Control icon={treeIcons[name]}>{name}</Accordion.Control>
        <Accordion.Panel>
          <Tabs defaultValue={Object.keys(perkTrees)[0]}>
            <Tabs.List>
              {Object.keys(perkTrees).map(skill => (
                <Tabs.Tab key={skill} value={skill}>
                  {skill}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            {Object.entries(perkTrees).map(([skill, perkTree]) => (
              <PerkTreeCheckboxGroup key={skill} skill={skill} perkTree={perkTree} form={form} />
            ))}
          </Tabs>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function PerkTreeCheckboxGroup({
  skill,
  perkTree,
  form,
}: {
  skill: string;
  perkTree: PerkTree;
  form: UseFormReturnType<PerkFormValues>;
}) {
  function onPerksSelected(selectedPerks: string[]) {
    const requirements = selectedPerks.flatMap(perk => getPerkRequirements(perk, perkTree));
    const nextPerks = Array.from(new Set([...selectedPerks, ...requirements]));
    form.setFieldValue(skill, nextPerks);
  }

  return (
    <Tabs.Panel pb="sm" key={skill} value={skill}>
      <Checkbox.Group {...form.getInputProps(skill)} onChange={onPerksSelected}>
        <SimpleGrid mt="md" cols={5}>
          {Object.entries(perkTree).map(([perkName, perk]) => (
            <Checkbox key={perkName} label={perkName} value={perkName} description={perk.description} />
          ))}
        </SimpleGrid>
      </Checkbox.Group>
    </Tabs.Panel>
  );
}

function getPerkRequirements(perkName: string, perkTree: PerkTree): string[] {
  const requirements = perkTree[perkName].requirements;
  if (requirements && typeof requirements === 'string') {
    return [requirements, ...getPerkRequirements(requirements, perkTree)];
  }
  // TODO implement OR requirements
  return [];
}

export function createPerksForm(): UseFormInput<PerkFormValues> {
  return {
    initialValues: {
      Archery: [],
      'One Handed': [],
      Block: [],
    },
    // TODO hacky validation
    validate: values => ({ archery: Object.values(values).every(v => v.length === 0) ? 'Error' : null }),
  };
}
