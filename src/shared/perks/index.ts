import { magePerks } from './mage';
import { PerkTrees } from './perk';
import { thiefPerks } from './thief';
import { warriorPerks } from './warrior';

export * from './perk';
export * from './mage';
export * from './thief';
export * from './warrior';

export const allPerks: PerkTrees = {
  ...thiefPerks,
  ...magePerks,
  ...warriorPerks,
};
