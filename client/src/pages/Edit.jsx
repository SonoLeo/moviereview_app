import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Edit = () => {
  const [movie, setMovie] = useState({
    title: "",
    review: "",
    cover: "",
    vote: 0,
  });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get("http://localhost:3001/movies/" + id);
        setMovie({
          title: res.data[0].title,
          review: res.data[0].review,
          cover: res.data[0].cover,
          vote: res.data[0].vote,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMovie = async (e) => {
    if (!Object.values(movie).every((x) => !!x)) {
      alert("You need to fill out every field");
      return;
    }

    if (movie.vote < 2 || movie.vote > 10) {
      alert('The "vote" field needs to be a value between 2 and 10');
      return;
    }

    try {
      await axios
        .put("http://localhost:3001/movies/edit/" + id, movie)
        .then(navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit a movie</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={movie.title}
      />
      <textarea
        placeholder="review"
        name="review"
        onChange={handleChange}
        value={movie.review}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
        value={movie.cover}
      />
      <input
        type="number"
        placeholder="vote"
        name="vote"
        onChange={handleChange}
        value={movie.vote}
      />
      <button type="submit" onClick={sendMovie}>
        Edit Movie
      </button>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};
