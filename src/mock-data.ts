import { Character } from './shared/character';

const mockData: Character[] = [
  {
    id: 0,
    name: 'The Nightblade',
    author: 'Breems',
    game: 'skyrim',
    summary:
      'A stealthy assassin focusing on Illusion magic. This character is a master of the shadows and can manipulate the minds of their enemies.',
    sex: 'Any',
    race: 'Dark Elf',
    isModded: false,
    media: {
      videoUrl: 'https://www.youtube.com/watch?v=kGU1_sklriI',
      image:
        'https://images.uesp.net/thumb/6/67/ON-render-Nightblade.jpg/1200px-ON-render-Nightblade.jpg',
    },
    roleplay: {
      backstory: `In the heart of Morrowind's shadowed lands, Draven Veloth was born into a life of hardship and secrecy. Raised amidst the turmoil of Vvardenfell, he inherited a natural affinity for stealth and sorcery, becoming a skilled nightblade under his father's tutelage. Tragedy struck when the eruption of the Red Mountain claimed his family, leaving Draven orphaned and seeking vengeance.

        Venturing into Skyrim's tumultuous realm, Draven wove his skills into the fabric of the province's conflicts, aligning with shadows to manipulate the course of war. With a blade in one hand and dark magic in the other, he pursued justice for his fallen kin while leaving a trail of whispers and fear in his wake, a solitary figure destined to be both feared and revered in the annals of Skyrim's history.`,
      questlines: ['Thieves Guild', 'Join Dark Brotherhood', 'College of Winterhold'],
      roleplay: `To fully embody your Skyrim dark elf nightblade, immerse yourself in Morrowind's lore, utilizing stealth and sorcery to navigate the province's shadows while seeking vengeance for your family's loss. Explore Skyrim's factions, aligning with those that serve your character's goals and values, and engaging in ethical dilemmas that test your moral compass. Develop a unique persona with distinct quirks and relationships, continuously evolving your character as you progress through the game. Above all, embrace the immersive experience of roleplaying, allowing your imagination to guide you on epic adventures through the world of Tamriel.`,
      gameplayNotes: `Employ a stealthy approach for covert maneuvers and surprise attacks, blending one-handed weapons with destruction magic for close-quarters combat. Maintain a versatile skillset encompassing Sneak, One-Handed, Destruction, Illusion, and Conjuration, while utilizing dual-wielding techniques and alchemy for strategic advantages. Enchant weapons and armor to bolster offensive and defensive capabilities, adapting your tactics to various combat scenarios and enemy types. Stay immersed in roleplay by aligning gameplay decisions with your character's backstory and motivations, ensuring a dynamic and engaging experience in the world of Skyrim.`,
    },
    perks: {
      Illusion: {
        'Novice Illusion': {
          description: 'Cast Novice level Illusion spells for half magicka.',
        },
        'Apprentice Illusion': {
          description: 'Cast Apprentice level Illusion spells for half magicka.',
          requirements: 'Novice Destruction',
        },
        'Hypnotic Gaze': {
          description: 'Calm spells now work on higher level opponents. Cumulative with Kindred Mage and Animage.',
          requirements: 'Novice Illusion',
        },
        'Aspect of Terror': {
          description: 'Fear spells work on higher level opponents. Cumulative with Kindred Mage and Animage.',
          requirements: 'Hypnotic Gaze',
        },
      },
      Sneak: {
        'Stealth (1)': {
          description: 'You are 20% harder to detect when sneaking.',
        },
        'Stealth (2)': {
          description: 'You are 25% harder to detect when sneaking.',
          requirements: 'Stealth (1)',
        },
        'Stealth (3)': {
          description: 'You are 30% harder to detect when sneaking.',
          requirements: 'Stealth (2)',
        },
        Backstab: {
          description: 'Sneak attacks with one-handed weapons now do six times damage.',
          requirements: 'Stealth (1)',
        },
        'Deadly Aim': {
          description: 'Sneak attacks with bows now do three times damage.',
          requirements: 'Backstab',
        },
        "Assassin's Blade": {
          description: 'Sneak attacks with daggers now do a total of fifteen times normal damage.',
          requirements: 'Deadly Aim',
        },
      },
    },
    equipment: {
      weapons: {
        'One-Handed': ['Blade of Woe'],
      },
      armor: {
        Armor: ['Nightingale Armor'],
        Boots: ['Nightingale Boots'],
        Gauntlets: ['Nightingale Gauntlets'],
        Helmets: ['Nightingale Helmet'],
      },
      spells: {
        Illusion: ['Fury', 'Fear', 'Invisibility'],
      },
      shouts: ['Aura Whisper', 'Throw Voice'],
      powers: ['Nightingale Strife'],
      standingStone: 'The Shadow Stone',
    },
  },
  {
    id: 1,
    name: 'The Warrior',
    author: 'Breems',
    game: 'skyrim',
    summary:
      'A mighty warrior skilled in combat and tactics. This character excels in close-quarters combat and is proficient in heavy armor and shields.',
    sex: 'Any',
    race: 'Nord',
    isModded: false,
    media: {
      videoUrl: 'https://www.youtube.com/watch?v=kGU1_sklriI',
      image:
        'https://imgs.search.brave.com/klAbZhSrfN0Moh3QQTI6oD11lA0w5HN7GO_qRC1dIQY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnRoZWdhbWVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDUv/U2t5cmltLS0tSW1w/ZXJpYWwtd2Fycmlv/ci5qcGc',
    },
    roleplay: {
      backstory: `In the heart of Morrowind's shadowed lands, Draven Veloth was born into a life of hardship and secrecy. Raised amidst the turmoil of Vvardenfell, he inherited a natural affinity for stealth and sorcery, becoming a skilled nightblade under his father's tutelage. Tragedy struck when the eruption of the Red Mountain claimed his family, leaving Draven orphaned and seeking vengeance.

        Venturing into Skyrim's tumultuous realm, Draven wove his skills into the fabric of the province's conflicts, aligning with shadows to manipulate the course of war. With a blade in one hand and dark magic in the other, he pursued justice for his fallen kin while leaving a trail of whispers and fear in his wake, a solitary figure destined to be both feared and revered in the annals of Skyrim's history.`,
      questlines: ['Thieves Guild', 'Join Dark Brotherhood', 'College of Winterhold'],
      roleplay: `To fully embody your Skyrim dark elf nightblade, immerse yourself in Morrowind's lore, utilizing stealth and sorcery to navigate the province's shadows while seeking vengeance for your family's loss. Explore Skyrim's factions, aligning with those that serve your character's goals and values, and engaging in ethical dilemmas that test your moral compass. Develop a unique persona with distinct quirks and relationships, continuously evolving your character as you progress through the game. Above all, embrace the immersive experience of roleplaying, allowing your imagination to guide you on epic adventures through the world of Tamriel.`,
      gameplayNotes: `Employ a stealthy approach for covert maneuvers and surprise attacks, blending one-handed weapons with destruction magic for close-quarters combat. Maintain a versatile skillset encompassing Sneak, One-Handed, Destruction, Illusion, and Conjuration, while utilizing dual-wielding techniques and alchemy for strategic advantages. Enchant weapons and armor to bolster offensive and defensive capabilities, adapting your tactics to various combat scenarios and enemy types. Stay immersed in roleplay by aligning gameplay decisions with your character's backstory and motivations, ensuring a dynamic and engaging experience in the world of Skyrim.`,
    },
    perks: {
      Illusion: {
        'Novice Illusion': {
          description: 'Cast Novice level Illusion spells for half magicka.',
        },
        'Apprentice Illusion': {
          description: 'Cast Apprentice level Illusion spells for half magicka.',
          requirements: 'Novice Destruction',
        },
        'Hypnotic Gaze': {
          description: 'Calm spells now work on higher level opponents. Cumulative with Kindred Mage and Animage.',
          requirements: 'Novice Illusion',
        },
        'Aspect of Terror': {
          description: 'Fear spells work on higher level opponents. Cumulative with Kindred Mage and Animage.',
          requirements: 'Hypnotic Gaze',
        },
      },
      Sneak: {
        'Stealth (1)': {
          description: 'You are 20% harder to detect when sneaking.',
        },
        'Stealth (2)': {
          description: 'You are 25% harder to detect when sneaking.',
          requirements: 'Stealth (1)',
        },
        'Stealth (3)': {
          description: 'You are 30% harder to detect when sneaking.',
          requirements: 'Stealth (2)',
        },
        Backstab: {
          description: 'Sneak attacks with one-handed weapons now do six times damage.',
          requirements: 'Stealth (1)',
        },
        'Deadly Aim': {
          description: 'Sneak attacks with bows now do three times damage.',
          requirements: 'Backstab',
        },
        "Assassin's Blade": {
          description: 'Sneak attacks with daggers now do a total of fifteen times normal damage.',
          requirements: 'Deadly Aim',
        },
      },
    },
    equipment: {
      weapons: {
        'One-Handed': ['Blade of Woe'],
      },
      armor: {
        Armor: ['Nightingale Armor'],
        Boots: ['Nightingale Boots'],
        Gauntlets: ['Nightingale Gauntlets'],
        Helmets: ['Nightingale Helmet'],
      },
      spells: {
        Illusion: ['Fury', 'Fear', 'Invisibility'],
      },
      shouts: ['Aura Whisper', 'Throw Voice'],
      powers: ['Nightingale Strife'],
      standingStone: 'The Shadow Stone',
    },
  },
];

export default mockData;
