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
    name: 'Foo',
    shortDescription: 'Description 1'
  },
  {
    id: 1,
    name: 'Bar',
    shortDescription: 'Description 2'
  }
];

router.get('/', async (req, res) => {
  res.send(characters);
});

module.exports = router;
