import {
  IconBow,
  IconHandGrab,
  IconHelmet,
  IconShield,
  IconShirt,
  IconShirtFilled,
  IconShoe,
  IconSword,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

const equipmentIcons: Record<string, ReactNode> = {
  'One-Handed': <IconSword />,
  'Two-Handed': <IconSword />,
  Ranged: <IconBow />,
  Helmet: <IconHelmet />,
  Body: <IconShirtFilled />,
  Armor: <IconShirt />,
  Boots: <IconShoe />,
  Gauntlets: <IconHandGrab />,
  Helmets: <IconHelmet />,
  Shields: <IconShield />,
};

export default equipmentIcons;
