import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import factions from '../faction/factions';
import { Col, Row } from 'react-bootstrap';

export default function () {
  const [character, setCharacter] = useState(
    {
      name: '',
      mods: [],
      story: {
        backstory: '',
        roleplay: '',
        factions: []
      },
      playstyle: {
        skills: [],
        equipment: {
          weapons: [],
          armor: []
        },
        spells: [],
        shouts: [],
        standingStone: ''
      }
    }
  );

  return (
    <Form>
      <Col xs={8}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name your character"
            value={character.name}
            onChange={event => setCharacter({ ...character, name: event.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" placeholder="Give a brief summary of your character" />
        </Form.Group>

        <h4 className="text-info">Story</h4>

        <Form.Group>
          <Form.Label>Backstory</Form.Label>
          <Form.Control as="textarea" placeholder="Describe your character's origins" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Roleplay</Form.Label>
          <Form.Control as="textarea" placeholder="Offer gameplay tips for roleplaying this character" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Factions</Form.Label>
          {Object.keys(factions).map(faction => (
            <Form.Check
              type="checkbox"
              label={factions[faction].name}
            />
          ))}
        </Form.Group>

        <h4 className="text-info">Playstyle</h4>

        <Row>
          <Col xs="auto">
            <Form.Group>
              <Form.Label>Standing Stone</Form.Label>
              {['Lord', 'Lady', 'Thief', 'Warrior'].map(stone => (
                <Form.Check
                  type="radio"
                  label={stone}
                />
              ))}
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Form.Group>
              <Form.Label>Skills</Form.Label>
              {['Alteration', 'Alchemy', 'Block', 'Destruction', 'Illusion', 'Restoration'].map(skill => (
                <Form.Check
                  type="checkbox"
                  label={skill}
                />
              ))}
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Form>
  );
}
