import React from 'react';

interface Props {
  joke: string;
}

const JokeItem: React.FC<Props> = ({joke}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Joke</h5>
        <p className="card-text">{joke}</p>
      </div>
    </div>
  );
};

export default JokeItem;