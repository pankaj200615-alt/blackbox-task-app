import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "sk-Fn9pM07NUGCgsveUr04pqw";

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

app.listen(10000, () => {
  console.log("Server running");
});
