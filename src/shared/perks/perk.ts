export interface Perk {
  description: string;
  requirements?: string | string[];
}

type PerkName = string;
type Skill = string;
export type PerkTree = Record<PerkName, Perk>;
export type PerkTrees = Record<Skill, PerkTree>;
