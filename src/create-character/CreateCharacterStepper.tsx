import OverviewStep, { OverviewFormValues, createOverviewForm } from './steps/OverviewStep';
import { Button, Group, Stepper, Title } from '@mantine/core';
import EquipmentStep, { EquipmentFormValues, createEquipmentForm } from './steps/equipment/EquipmentStep';
import PerksStep, { PerkFormValues, createPerksForm } from './steps/perks/PerksStep';
import RoleplayStep, { RoleplayFormValues, createRoleplayForm } from './steps/RoleplayStep';
import { useForm } from '@mantine/form';
import { Dispatch, SetStateAction, useState } from 'react';
import { Character } from '../shared/character';
import { IconCheck } from '@tabler/icons-react';
import { PerkTrees, allPerks } from '../shared/perks';

export default function CreateCharacterStepper({
  setCharacters,
}: {
  setCharacters: Dispatch<SetStateAction<Character[]>>;
}) {
  const overviewForm = useForm(createOverviewForm());
  const perksForm = useForm(createPerksForm());
  const equipmentForm = useForm(createEquipmentForm());
  const roleplayForm = useForm(createRoleplayForm());

  const [step, setStep] = useState(0);
  const nextStep = () => setStep(current => (current < 3 ? current + 1 : current));
  const prevStep = () => setStep(current => (current > 0 ? current - 1 : current));
  const stepForms = [overviewForm, perksForm, equipmentForm, roleplayForm];

  return (
    <>
      <Title mb="md" order={2}>
        {(overviewForm.values.name as string) ?? 'New Character'}
      </Title>

      <Stepper active={step} size="sm">
        <Stepper.Step label="Overview">
          <OverviewStep form={overviewForm} />
        </Stepper.Step>
        <Stepper.Step label="Perks">
          <PerksStep form={perksForm} />
        </Stepper.Step>
        <Stepper.Step label="Equipment">
          <EquipmentStep form={equipmentForm} />
        </Stepper.Step>
        <Stepper.Step label="Roleplay">
          <RoleplayStep form={roleplayForm} />
        </Stepper.Step>
      </Stepper>

      <Group justify="space-between" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button
          leftSection={step === 3 && <IconCheck />}
          onClick={() => {
            console.log('formValues', stepForms[step].values);
            const result = stepForms[step].validate();

            if (!result.hasErrors && step < 3) {
              nextStep();
            } else if (!result.hasErrors) {
              const character = makeCharacter(
                overviewForm.values,
                perksForm.values,
                equipmentForm.values,
                roleplayForm.values
              );
              console.log('character', character);
              setCharacters((characters: Character[]) => [...characters, character]);
            }
          }}
        >
          {step === 3 ? 'Submit' : 'Next'}
        </Button>
      </Group>
    </>
  );
}

function makeCharacter(
  overviewValues: OverviewFormValues,
  perksValues: PerkFormValues,
  gameplayValues: EquipmentFormValues,
  roleplayValues: RoleplayFormValues
): Character {
  const { name, image, race, sex, summary, videoUrl } = overviewValues;
  const { backstory, roleplay, questlines, gameplayNotes } = roleplayValues;

  return {
    id: 0,
    name,
    author: 'Breems',
    game: 'skyrim',
    media: {
      image,
      videoUrl,
    },
    isModded: false,
    race,
    sex,
    summary,
    roleplay: {
      backstory,
      roleplay,
      questlines,
      gameplayNotes,
    },
    perks: makePerks(perksValues),
    // TODO simplify this and make casing consistent
    equipment: {
      weapons: gameplayValues.Weapons,
      armor: gameplayValues.Armor,
      spells: gameplayValues.Spells,
      shouts: gameplayValues.Shouts,
      powers: gameplayValues.Powers,
    },
  };
}

function makePerks(perkValues: PerkFormValues): PerkTrees {
  const filteredPerkValues = Object.entries(perkValues).filter(([_, perkNames]) => perkNames.length > 0);
  return filteredPerkValues.reduce((perkTrees, [skill, perkNames]) => {
    const perkEntries = Object.entries(allPerks[skill]).filter(([perkName, _]) => perkNames.includes(perkName));
    perkTrees[skill] = Object.fromEntries(perkEntries);
    return perkTrees;
  }, {} as PerkTrees);
}
