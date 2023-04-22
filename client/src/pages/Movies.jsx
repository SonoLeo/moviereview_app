import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3001/movies/");
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  // Change this image with star
  const checkVote = (vote) => {
    if (vote > 6)
      return "https://purepng.com/public/uploads/large/big-green-apple-yom.png";
    else
      return "https://static.vecteezy.com/system/resources/previews/008/541/692/original/granny-smith-apple-fruit-food-transparent-png.png";
  };

  return (
    <div>
      <img
        className="head-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
        alt=""
      />
      <div className="movies">
        {movie.map((movie) => (
          <div className="movies-card" key={movie.id}>
            {movie.cover && (
              <img className="movies-card-img" src={movie.cover} alt=""></img>
            )}
            <h2>{movie.title}</h2>
            <div className="movies-review">
              <img src={checkVote(movie.vote)} alt="" />
              <p>{movie.review}</p>
              <h1>{movie.vote}</h1>
            </div>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add Movie</Link>
      </button>
    </div>
  );
};

export default Movies;
