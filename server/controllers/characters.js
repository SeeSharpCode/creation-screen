const express = require('express');
const router = express.Router();

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Breems:J0dwqUZoQZIGiddC@creationscreen-yr0bb.mongodb.net/test?retryWrites=true&w=majority";
// // client.connect(err => {
// //   console.log("Connected successfully to server");
// //   const collection = client.db("creation-screen");
// //   // perform actions on the collection object
// //   client.close();
// // });

// const loadCharacters = async () => {
//   const client = await MongoClient.connect(uri, { useNewUrlParser: true });
//   return client.db('creation-screen').collection('characters');
// };

const characters = [
  {
    id: 0,
    name: 'Milk Drinker',
    author: 'Breems',
    imageUrl: 'https://static-4.nexusmods.com/15/mods/110/images/52898-1-1397260902.jpg',
    shortDescription: 'The Milk Drinker\'s greatest pleasure is stirring up tavern trouble.',
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
    shortDescription: 'Foo bar baz qux.',
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

router.get('/', async (req, res) => {
  return res.send(characters);
});

router.get('/:id', async (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  return character ? res.send(character) : res.status(404).send();
});

module.exports = router;
