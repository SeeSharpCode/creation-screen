import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function({ addCharacter }) {
  const history = useHistory();
  const [character, setCharacter] = useState(
    {
      name: '',
      summary: '',
      mods: [],
      story: {
        backstory: '',
        roleplay: '',
        questlines: []
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
          <Form.Control
            as="textarea"
            placeholder="Give a brief summary of your character"
            value={character.summary}
            onChange={event => setCharacter({ ...character, summary: event.target.value })}
          />
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
          <Form.Label>Questlines</Form.Label>
          {['Main', 'Join Dark Brotherhood', 'Destroy Dark Brotherhood', 'Thieve\'s Guild', 'Bard\'s College'].map(questline => (
            <Form.Check
              key={questline}
              type="checkbox"
              label={questline}
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
                  key={stone}
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
                  key={skill}
                  type="checkbox"
                  label={skill}
                />
              ))}
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" onClick={() => { addCharacter(character); history.push('/') }}>
          Submit
        </Button>
      </Col>
    </Form>
  );
}
