import { PerkTrees } from './perks';

export interface Roleplay {
  backstory: string;
  questlines?: string[];
  roleplay: string;
  gameplayNotes: string;
}

export interface Equipment {
  weapons?: Record<string, string[]>;
  armor?: Record<string, string[]>;
  spells?: Record<string, string[]>;
  shouts?: string[];
  powers?: string[];
  standingStone?: string;
}

export interface Character {
  id: number;
  name: string;
  author: string;
  game: 'skyrim';
  summary: string;
  sex: string;
  race: string;
  isModded: boolean;
  media: {
    image: string;
    videoUrl?: string;
  };
  roleplay: Roleplay;
  equipment: Equipment;
  perks: PerkTrees;
}

export function getSkills(character: Character): string[] {
  return Object.keys(character.perks);
}
