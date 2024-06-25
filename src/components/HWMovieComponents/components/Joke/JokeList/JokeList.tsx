import React from 'react';
import JokeItem from '../JokeItem/JokeItem';
import {jokeState} from '../../../../../types';


interface Props {
  jokes: jokeState[];
}

const JokeList: React.FC<Props> = ({jokes}) => {
  return (
    <div>
      {
        jokes.map((el) => {
          return <JokeItem joke={el.joke} key={el.id}/>;
        })
      }
    </div>
  );
};

export default JokeList;