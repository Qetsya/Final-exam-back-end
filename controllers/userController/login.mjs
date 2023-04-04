import { usersList } from "../../data/users.mjs";
import { comparePassword } from "../../utils/hashing.mjs";

export const login = async (request, response) => {
    const { email, password } = request.body;

    const isEmailValid = typeof email === "string";
    const isPasswordValid = typeof password === "string";
    if (!isEmailValid || !isPasswordValid) {
        response.status(403).json({
            message: "Invalid credentials",
        });
        return;
    };

    const user = usersList.find((user) => user.email === email);
    if (!user) {
        response.status(403).json({
            message: "There is no user with this email registered",
        });
        return;
    };

    const isPasswordMatch = await comparePassword(password, user.password)
    console.log(password, user.password)
    if (!isPasswordMatch) {
        response.status(403).json({
            message: "Wrong password",
        });
        return;
    };

    response.json({
        id: user._id,
    });
}