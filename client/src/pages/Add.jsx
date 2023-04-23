import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Add = () => {
  const [movie, setMovie] = useState({
    title: "",
    review: "",
    cover: "nocover",
    vote: null,
  });

  const navigate = useNavigate();

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

    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/movies/add", movie)
        .then(navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Add a movie</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <textarea placeholder="review" name="review" onChange={handleChange} />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="vote"
        name="vote"
        onChange={handleChange}
      />
      <button type="submit" onClick={sendMovie}>
        Send movie
      </button>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};
