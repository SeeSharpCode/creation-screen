import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { characters } from './character-service';

export default function () {
  return (
    <Row>
      {characters.map(character =>
        <Col>
          <CharacterSummary character={character} />
        </Col>
      )}
    </Row>
  );
}

const CharacterSummary = ({ character }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.imageUrl} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Subtitle className="mb-2">By <span className="text-muted">{character.author}</span></Card.Subtitle>
        <Card.Text>{character.summary}</Card.Text>
        <Card.Link href="#">View</Card.Link>
      </Card.Body>
    </Card>
  );
};
