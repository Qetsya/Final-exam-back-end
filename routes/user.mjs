import express from 'express';
import { register } from "../controllers/userController/register.mjs"
import { login } from "../controllers/userController/login.mjs"
import { usersList } from '../data/users.mjs';
import { getUser } from '../controllers/userController/getUser.mjs';

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/all", (req, res) => res.json(usersList))

router.get("/get/:id", getUser);

export const userRouter = router;