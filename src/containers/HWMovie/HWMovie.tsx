import MovieNote from '../../components/HWMovieComponents/containers/MovieNote/MovieNote';
import Jokes from '../../components/HWMovieComponents/containers/Jokes/Jokes';

const HwMovie = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-5">
          <Jokes/>
        </div>
        <div className="col-7">
          <MovieNote/>
        </div>
      </div>
    </div>
  );
};

export default HwMovie;