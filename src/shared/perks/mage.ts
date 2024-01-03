import { PerkTrees } from './perk';

export const magePerks: PerkTrees = {
  Destruction: {
    'Novice Destruction': {
      description: 'Cast Novice level Destruction spells for half magicka.',
    },
    'Apprentice Destruction': {
      description: 'Cast Apprentice level Destruction spells for half magicka.',
      requirements: 'Novice Destruction',
    },
    'Adept Destruction': {
      description: 'Cast Adept level Destruction spells for half magicka.',
      requirements: 'Apprentice Destruction',
    },
    'Expert Destruction': {
      description: 'Cast Expert level Destruction spells for half magicka.',
      requirements: 'Adept Destruction',
    },
    'Master Destruction': {
      description: 'Cast Master level Destruction spells for half magicka.',
      requirements: 'Expert Destruction',
    },
    'Rune Master': {
      description: 'Can place runes five times farther away.',
      requirements: 'Apprentice Destruction',
    },
    'Augmented Flames (1)': {
      description: 'Fire spells do 25% more damage.',
      requirements: 'Novice Destruction',
    },
    'Augmented Flames (2)': {
      description: 'Fire spells do 50% more damage.',
      requirements: 'Augmented Flames (1)',
    },
    'Intense Flames': {
      description: 'Fire damage causes targets to flee if their health is low.',
      requirements: 'Augmented Flames (1)',
    },
    'Augmented Frost (1)': {
      description: 'Frost spells do 25% more damage.',
      requirements: 'Novice Destruction',
    },
    'Augmented Frost (2)': {
      description: 'Frost spells do 50% more damage.',
      requirements: 'Augmented Frost (1)',
    },
    'Deep Freeze': {
      description: 'Frost damage paralyzes targets if their health is low.',
      requirements: 'Augmented Frost (1)',
    },
    'Augmented Shock (1)': {
      description: 'Shock spells do 25% more damage.',
      requirements: 'Novice Destruction',
    },
    'Augmented Shock (2)': {
      description: 'Shock spells do 50% more damage.',
      requirements: 'Augmented Shock (1)',
    },
    Disintegrate: {
      description: 'Shock spells disintegrate targets if their health is low.',
      requirements: 'Augmented Shock (1)',
    },
    'Destruction Dual Casting': {
      description: 'Dual casting a Destruction spell overcharges the effects into an even more powerful version.',
      requirements: 'Novice Destruction',
    },
    Impact: {
      description: 'Most destruction spells will stagger an opponent when dual cast.',
      requirements: 'Destruction Dual Casting',
    },
  },
};
