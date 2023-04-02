import {usersList} from "../data/users.mjs"
import { v4 as createId } from "uuid";
import { hashPassword } from "../utils/hashing.mjs";

export const registerUserController =async (request, response) => {


    const { email, password, firstName, lastName, address, gender, terms, newsLetter } = req.body;

    const isEmail = typeof email === "string";
    const isPassword = typeof password === "string";
    const isFirstName = typeof firstName === "string";
    const isLastName = typeof lastName === "string";
    const isAddress = typeof address === "string";
    const isGender = typeof gender === "string";
    const isTerms = typeof terms === "boolean";
    const isNewsLetter = typeof newsLetter === "boolean";

    if (!isEmail || !isPassword || !isFirstName || !isLastName || !isAddress || !isGender || !isTerms || !isNewsLetter) {
        res.status(400).json({ message: "Bad register data" });
        return;
      }

      const hasUser = usersList.some((user) => user.email === email);
      if (hasUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const user = {
        _id: createId(),
        email,
        password: await hashPassword(password),
        firstName,
        lastName,
        address,
        gender,
        terms,
        newsLetter,
      };

      usersList.push(user);

      console.log(`register userList `, usersList)
    
      res.json({ message: "ok" });
};