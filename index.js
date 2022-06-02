import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.get('/', (req, res) =>{
  res.send("Hello to Memories API")
})
// const CONNECTION_URL =
//   "mongodb+srv://revanthsai:revanthsai123@cluster0.rljvh55.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5100;

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
//   )
//   .catch((error) => console.log(error.message));

try {
  await mongoose.connect(process.env.CONNECTION_URL);
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
} catch (error) {
  console.log(error.message);
}

// mongoose.set("useFindAndModify", false);

// https://www.mongodb.com/cloud/atlas
