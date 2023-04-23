import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

const PORT = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "moviedb",
});

app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
  console.log("listening on port 3001");
});

app.get("/movies/", (req, res) => {
  const query = "SELECT * FROM movies;";
  db.query(query, (err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

app.get("/movies/:id", (req, res) => {
  const query = "SELECT * FROM movies WHERE id = ?;";
  const id = req.params.id;
  db.query(query, id, (err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

app.post("/movies/add", (req, res) => {
  const query =
    "INSERT INTO movies(`title`, `review`, `cover`, `vote`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.review,
    req.body.cover,
    req.body.vote,
  ];
  db.query(query, [values], (err, result) => {
    if (err) console.log(err);
    else console.log("query successfully executed");
  });
});

app.delete("/movies/delete:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM movies WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) console.log(err);
    else console.log("row with field id " + id + " successfully deleted");
  });
});

app.put("/movies/edit/:id", (req, res) => {
  const values = [
    req.body.title,
    req.body.review,
    req.body.cover,
    req.body.vote,
    req.params.id,
  ];
  const query =
    "UPDATE movies SET title = ?, review = ?, cover = ?, vote = ? WHERE id = ?";
  db.query(query, values, (err, result) => {
    if (err) console.log(err);
    else
      console.log("Row with id = " + req.params.id + " successfully updated");
  });
});
