import React, {useEffect} from 'react';
import MovieItem from '../MovieItem/MovieItem';
import {Movie} from '../../../../../types';


interface Props {
  movies: Movie[];
  edit: (movie: Movie) => void;
  remove: (id: string) => void;
}

const MovieList: React.FC<Props> = ({
  movies,
  edit,
  remove
}) => {

  useEffect(() => {
    console.log(`[movieList] render`);
  });

  return (
    <div className="mt-3">
      <h4>To watch List</h4>
      {
        movies.map((movie) => {
          return <MovieItem movie={movie} editItem={edit} removeItem={() => remove(movie.id)} key={movie.id}/>;
        })
      }


    </div>
  );
};

export default MovieList;