import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { registerUserController } from "./controllers/registerUserController.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
const corsMiddlecare = cors();

app.use(corsMiddlecare);
app.post("/register", registerUserController)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  });