import React from 'react';
import { useParams } from 'react-router-dom';

export default function () {
  let { name } = useParams();

  return (
    <h2>{name}</h2>
  )
}
