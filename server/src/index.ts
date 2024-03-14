import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend route");
});

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
