import React, { FC } from 'react';

interface Props {
  label: string;
  newGame: () => void;
}

const NewGame: FC<Props> = ({ label, newGame }) => {
  return <button onClick={newGame}>{label}</button>;
};

export default NewGame;
