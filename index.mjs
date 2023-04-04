import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { userRouter } from "./routes/user.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT;
const corsMiddlecare = cors();

app.use(express.json());
app.use(corsMiddlecare);

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});