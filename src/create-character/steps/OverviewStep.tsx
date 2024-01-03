import { Checkbox, FileInput, Grid, HoverCard, Select, TextInput, Textarea, Text } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { UseFormInput, UseFormReturnType, hasLength } from '@mantine/form';

export interface OverviewFormValues {
  name: string;
  race: string;
  sex: string;
  summary: string;
  isModded: boolean;
  image: string;
  videoUrl: string;
}

const races = [
  'Argonian',
  'Breton',
  'Dark Elf',
  'High Elf',
  'Imperial',
  'Khajiit',
  'Nord',
  'Orc',
  'Redguard',
  'Wood Elf',
  'Any',
];

const sexes = ['Any', 'Male', 'Female'];

export default function OverviewStep({ form }: { form: UseFormReturnType<OverviewFormValues> }) {
  const handleFileChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        form.setFieldValue('image', reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid maw={900}>
      <Grid.Col span={6}>
        <TextInput label="Name" required {...form.getInputProps('name')} />
      </Grid.Col>
      <Grid.Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <Checkbox {...form.getInputProps('isModded')} label="Modded?" mt="lg" />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text>
              We will soon support mod lists. For now, you can specify required mods in the Gameplay Notes field on step
              4.
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Grid.Col>

      <Grid.Col span={6}>
        <Select label="Suggested race" data={races} {...form.getInputProps('race')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Select label="Suggested sex" data={sexes} {...form.getInputProps('sex')} />
      </Grid.Col>

      <Grid.Col>
        <Textarea
          label="Summary"
          placeholder="Give a brief overview of your build."
          required
          {...form.getInputProps('summary')}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <FileInput
          leftSection={<IconUpload size={'1rem'} />}
          leftSectionPointerEvents="none"
          label="Image"
          accept="image/png,image/jpeg"
          required
          onChange={handleFileChange}
          placeholder="Upload an image"
        />
      </Grid.Col>
      <Grid.Col span={8}>
        <TextInput label="YouTube URL" placeholder="Optional" {...form.getInputProps('videoUrl')} />
      </Grid.Col>
    </Grid>
  );
}

const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

export function createOverviewForm(): UseFormInput<OverviewFormValues> {
  return {
    initialValues: {
      name: 'Tyler',
      race: 'Any',
      sex: 'Any',
      summary: 'ffffffffffffffffffffffffffffffff',
      isModded: false,
      image: 'ffffffffffffffffffffffffff',
      videoUrl: '',
    },
    validateInputOnBlur: ['name', 'summary', 'image'],
    validate: {
      name: hasLength({ min: 4 }, 'Name must have at least 4 characters'),
      summary: hasLength({ min: 25 }, 'Summary must be at least 25 characters'),
      image: value => (value ? null : 'Image must be a valid image file'),
      videoUrl: value => {
        if (!value) return null;

        try {
          const url = new URL(value);
          if (!youtubeUrlRegex.test(url.href)) {
            return 'Must be a valid YouTube URL';
          }
          return null;
        } catch (error) {
          return 'Must be a valid YouTube URL';
        }
      },
    },
  };
}
