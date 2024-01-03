import { Character } from '../shared/character';
import DetailBody from './DetailBody';
import DetailHeader from './DetailHeader';
import { useLoaderData } from 'react-router-dom';

export default function CharacterDetail() {
  const { character } = useLoaderData() as { character: Character };
  return (
    <>
      <DetailHeader character={character} />
      <DetailBody character={character} />
    </>
  );
}
