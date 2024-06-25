import React, {useState} from 'react';
import {Movie} from '../../../../../types';



interface Props {
  addToList: (movie: Movie) => void;
}

const initialState = {
  name: '',
  id: '',
};
const MovieForm: React.FC<Props> = ({addToList}) => {
  const [newMovie, setNewMovie] = useState<Movie>(initialState);

  const changeMovie = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewMovie((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addToList({
      ...newMovie,
      id: (Math.random() * 1000).toString()
    });

    setNewMovie(initialState);
  };

  return (
    <form className="row" onSubmit={onFormSubmit}>
      <h4>Add new Movie</h4>
      <div className="col-10">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="form-control"
            onChange={changeMovie}
            placeholder={'Enter new Movie title'}
            value={newMovie.name}
          />
        </div>
      </div>

      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>

    </form>
  );
};

export default MovieForm;