import { IconBook, IconCoins, IconFlame, IconLanguage, IconSkull } from '@tabler/icons-react';
import { ReactNode } from 'react';

const questlineIcons: Record<string, ReactNode> = {
  "Bard's College": <IconBook />,
  'Destroy Dark Brotherhood': <IconSkull />,
  'Join Dark Brotherhood': <IconSkull />,
  'Main Quest': <IconLanguage />,
  'Thieves Guild': <IconCoins />,
  'College of Winterhold': <IconFlame />,
  Dragonborn: <IconLanguage />,
};

const questlines = Object.keys(questlineIcons);

export { questlineIcons, questlines };
