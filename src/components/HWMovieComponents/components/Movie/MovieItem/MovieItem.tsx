import React, {useEffect, useState} from 'react';
import { Movie } from '../../../../../types';

interface Props {
  movie: Movie;
  removeItem: React.MouseEventHandler;
  editItem: (movie: Movie) => void;

}

const MovieItem: React.FC<Props> = React.memo(({
  movie,
  removeItem,
  editItem
}) => {
  const [movieItem, setMovieItem] = useState<Movie>(movie);

  useEffect(() => {
    console.log(`[movieItem] render ${movieItem.id}`);
  });
  const onMovieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieItem(prev => {
      return {...prev, name: event.target.value};
    });
    editItem(movieItem);
  };

  return (
    <form className="row">
      <div className="col-10">
        <input type="text" className="form-control" id={`name${movieItem.id}`} value={movieItem.name}
               onChange={onMovieChange}/>
      </div>
      <div className="col-2">
        <input type={"button"} className="btn-close" onClick={removeItem}></input>
      </div>
    </form>
  );
}, (prevProps, nextProps) => {
  return nextProps.movie.name === prevProps.movie.name;
});

export default MovieItem;