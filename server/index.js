import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "moviedb",
});

app.use(express.json());
app.use(cors());

app.listen(3001, (req, res) => {
  console.log("listening on port 3001");
});

app.get("/movies/", (req, res) => {
  const query = "SELECT `title`, `review`, `cover`, `vote` FROM movies;";
  db.query(query, (err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

app.post("/movies/insert", (req, res) => {
  const query =
    "INSERT INTO movies(`title`, `review`, `cover`, `vote`) VALUES (?)";
  const values = [
    "title from client",
    "review from client",
    "cover from client",
    5.0,
  ];
  db.query(query, [values], (err, result) => {
    if (err) console.log(err);
    else console.log("query successfully executed");
  });
});

app.delete("/movies/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM movies WHERE id = ?";
  db.query(query, id, (err, result) => {
    if (err) console.log(err);
    else console.log("field with id " + id + " successfully deleted");
  });
});
