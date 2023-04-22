import React, { useState, useEffect } from "react";
import axios from "axios";

export const Add = () => {
  const [movie, setMovie] = useState({
    title: "",
    review: "",
    cover: "",
    vote: null,
  });

  const handleChange = (e) => {
    setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMovie = async () => {
    try {
      await axios.post("http://localhost:3001/movies/add", movie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
      <button onClick={sendMovie}>Send movie</button>
    </div>
  );
};
