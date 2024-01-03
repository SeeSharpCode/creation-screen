import { MultiSelect, Stack, Textarea } from '@mantine/core';
import { UseFormInput, UseFormReturnType, hasLength } from '@mantine/form';
import { questlines } from '../../shared/questlines';

export interface RoleplayFormValues {
  backstory: string;
  questlines: string[];
  roleplay: string;
  gameplayNotes: string;
}

export default function RoleplayStep({ form }: { form: UseFormReturnType<RoleplayFormValues> }) {
  return (
    <Stack maw={900}>
      <Textarea
        label="Backstory"
        spellCheck={false}
        description="Describe your character's origins"
        required
        autosize
        maxRows={20}
        {...form.getInputProps('backstory')}
      />

      <MultiSelect
        label="Questlines"
        description="Select questlines that fit this character"
        spellCheck={false}
        placeholder="Click to select"
        data={questlines}
        {...form.getInputProps('questlines')}
      />

      <Textarea
        label="Roleplay"
        spellCheck={false}
        description="Describe how to roleplay the character"
        required
        autosize
        maxRows={20}
        {...form.getInputProps('roleplay')}
      />

      <Textarea
        label="Gameplay Notes"
        description="Describe combat, crafting, special moves, mods, etc."
        required
        spellCheck={false}
        {...form.getInputProps('gameplayNotes')}
      />
    </Stack>
  );
}

export function createRoleplayForm(): UseFormInput<RoleplayFormValues> {
  return {
    initialValues: {
      backstory: 'fffffffffffffffffffffffffffffffffffffffffff',
      roleplay: 'fffffffffffffffffffffffffffffffffffffffffff',
      questlines: [],
      gameplayNotes: 'fffffffffffffffffffffffffffffffffffffffffff',
    },
    validateInputOnBlur: true,
    validate: {
      backstory: hasLength({ min: 25 }, 'Backstory must be at least 25 characters'),
      roleplay: hasLength({ min: 25 }, 'Roleplay must have at least 25 characters'),
      gameplayNotes: hasLength({ min: 25 }, 'Gameplay Notes must have at least 25 characters'),
    },
  };
}
