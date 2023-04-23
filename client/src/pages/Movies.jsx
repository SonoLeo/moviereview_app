import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.png";

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

  const handleDelete = async (id) => {
    try {
      await axios
        .delete("http://localhost:3001/movies/delete" + id)
        .then(window.location.reload(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img className="head-img" src={logo} alt="" />
      <div className="movies">
        {movie.map((movie) => (
          <div className="movies-card" key={movie.id}>
            {movie.cover && (
              <img className="movies-card-img" src={movie.cover} alt=""></img>
            )}
            <h2>{movie.title}</h2>
            <h1>{movie.vote}</h1>
            <div className="movies-review">
              <p>{movie.review}</p>
            </div>
            <button className="update-btn">
              <Link to={`/edit/${movie.id}`}>Update</Link>
            </button>
            <button
              onClick={() => handleDelete(movie.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="add-btn">
        <Link to="/add">Add Movie</Link>
      </button>
    </div>
  );
};

export default Movies;
