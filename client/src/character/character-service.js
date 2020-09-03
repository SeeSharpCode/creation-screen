export const characters = [
  {
    id: 0,
    name: 'Milk Drinker',
    author: 'Breems',
    imageUrl: 'https://i.imgur.com/hjtxyDo.jpg',
    summary: 'The Milk Drinker\'s greatest pleasure is stirring up tavern trouble.',
    archetypes: ['bard'],
    race: 'Argonian',
    sex: 'Male',
    story: {
      backstory: "The Milk Drinker was raised by top-ranking members of the milk-drinking cult.",
      questlines: ['Main Story', 'Bard\'s College', 'Dragonborn'],
      roleplay: "Do stuff"
    },
    playstyle: {
      skills: ['speech', 'pickpocket'],
      perks: [],
      equipment: {
        weapons: ['Wabbajack', 'Wooden Sword'],
        armor: ['Daedric Armor Set']
      },
      spells: ['Firebolt'],
      shouts: ['Unrelenting Force'],
      standingStone: 'The Lord Stone',
    },
    mods: [
      {
        name: 'Ordinator',
        url: 'https://www.nexusmods.com/skyrimspecialedition/mods/1137?tab=files'
      }
    ]
  },
  {
    id: 1,
    name: 'Bladesinger',
    author: 'Kermit',
    imageUrl: 'https://i.pinimg.com/originals/48/63/23/486323ecda527b5d888a2c0fd998e042.jpg',
    summary: 'Foo bar baz qux.',
    description: {
      backstory: "Sings about the Blades, I guess? Who knows, really.",
      playstyle: "I reckon you'll become a bard and sing.",
      questlines: ['Bard\'s College', 'Dawnguard']
    },
    skills: ['speech', 'one-handed'],
    archetypes: ['bard'],
    equipment: {
      weapons: ['Blade\'s Sword', 'Ebony Blade'],
      armor: ['Daedric Armor Set']
    },
    standingStone: 'The Warrior Stone',
    perks: [],
    mods: [
      {
        name: 'Ordinator',
        url: 'https://www.nexusmods.com/skyrimspecialedition/mods/1137?tab=files'
      }
    ]
  }
];
