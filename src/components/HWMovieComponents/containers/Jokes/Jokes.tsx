import React, {useEffect, useState} from 'react';
import JokeList from '../../components/Joke/JokeList/JokeList';

import GetNewBtn from '../../components/Joke/GetJokeBtn/GetNewBtn';
import {JokesJson, jokeState, singleJoke} from '../../../../types';


const defaultUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single';

const Jokes = () => {
  const [jokes, setJokes] = useState<jokeState[]>([]);
  const [jokeAmount, setJokeAmount] = useState(1);
  const fetchData = async () => {
    let configUrl = defaultUrl;
    if (jokeAmount > 1) {
      configUrl = configUrl + `&amount=${jokeAmount}`;
    }
    const response = await fetch(configUrl);
    if (response.ok) {
      if (jokeAmount > 1) {
        const jokesJson = await response.json() as JokesJson;
        const newJokes = jokesJson.jokes.map((joke) => {
          return {id: String(joke.id), joke: joke.joke};
        });
        setJokes(newJokes);
      } else {
        const jokesJson = await response.json() as singleJoke;
        const newJoke = {id: String(jokesJson.id), joke: jokesJson.joke};
        setJokes([newJoke]);
      }
    }
  };
  useEffect(() => {
      void fetchData();
    },
    []);
  useEffect(() => {
    console.log("[jokes] are rendered/update");
  });

  const onAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJokeAmount(parseFloat(event.target.value));
  };


  return (
    <div>
      <h4>Jokes-Blockes</h4>
      <select className="form-select" value={jokeAmount} onChange={onAmountChange}>
        <option disabled>select jokes amount</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>

      <JokeList jokes={jokes}/>

      <br/>

      <GetNewBtn getJokes={fetchData}/>

    </div>
  );
};

export default Jokes;