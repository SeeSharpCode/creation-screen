import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { findById } from './mock-data';

export default function() {
  let { name } = useParams();
  
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

  useEffect(() => {
    setCharacter(findById(name));
  });

  return (
    <div>
      <h2>{character.names}</h2>
      <h6>By <Link to={`/users/${character.author}`}>{character.author}</Link></h6>
      <img alt="character" src={character.imageUrl} />

      <p className="mt-3">{character.summary}</p>

      <h4 className="text-info">Mods</h4>

      {character.mods.map(mod => (
          <span className="mr-3">{mod.name}</span>
      ))}

      <h4 className="text-info">Story</h4>

      <section className="mt-2">
        <h5>Backstory</h5>
        <ReactMarkdown source={character.story.backstory} />
      </section>

      <section className="mt-2">
        <h5>Roleplay</h5>
        <ReactMarkdown source={character.story.roleplay} />
      </section>

      <section className="my-2">
        <h5>Questlines</h5>
        {character.story.questlines.map(faction => (
          <span className="mr-3">{faction.name}</span>
        ))}
      </section>

      <h4 className="text-info mt-3">Playstyle</h4>

      <section className="mt-2">
        <h5>Standing Stone</h5>
        {character.playstyle.standingStone}
      </section>

      <section className="mt-2">
        <h5>Skills</h5>
        {character.playstyle.skills.map(skill => (
          <span className="mr-3">{skill}</span>
        ))}
      </section>

      <section className="mt-2">
        <h5>Weapons</h5>
        {character.playstyle.equipment.weapons.map(weapon => (
          <span className="mr-3">{weapon}</span>
        ))}
      </section>

      <section className="mt-2">
        <h5>Armor</h5>
        {character.playstyle.equipment.armor.map(armor => (
          <span className="mr-3">{armor}</span>
        ))}
      </section>

      <h4 className="text-info mt-3">Magic</h4>

      <section className="mt-2">
        <h5>Spells</h5>
        {character.playstyle.spells.map(spell => (
          <span className="mr-3">{spell}</span>
        ))}
      </section>

      <section className="mt-2">
        <h5>Shouts</h5>
        {character.playstyle.shouts.map(shout => (
          <span className="mr-3">{shout}</span>
        ))}
      </section>
    </div>
  )
}
