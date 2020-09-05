import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom';
import { characters } from './character-service';

export default function () {
  let { game } = useParams();

  return (
    <CardDeck>
      {characters.filter(character => character.game === game).map(character =>
        <CharacterSummary character={character} />
      )}
    </CardDeck>
  );
}

const badges = character => (
  <div className="mb-2" style={{ fontFamily: 'Segoe UI' }}>
    {character.mods && character.mods.length > 0 && <Badge className="mr-1" variant="warning">modded</Badge>}
    {character.playstyle.skills.map(skill => <Badge className="mr-1 text-lowercase" variant="secondary">{skill}</Badge>)}
  </div>
);

const CharacterSummary = ({ character }) => {
  return (
    <Card className="mb-3" style={{ minWidth: '16rem', maxWidth: '16rem' }}>
      <Card.Img variant="top" src={character.imageUrl} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Subtitle className="mb-2">
          By <Link to={`/users/${character.author}`}>{character.author}</Link>
        </Card.Subtitle>
        {badges(character)}
        <Card.Text>{character.summary}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <i className="far fa-heart"></i>
        <Card.Link className="align-self-end" href={`/${character.game}/characters/${character.name}`}>View</Card.Link>
      </Card.Footer>
    </Card>
  );
};
