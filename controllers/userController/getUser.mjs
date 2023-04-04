import { usersList } from "../../data/users.mjs";

export const getUser = (request, response) => {
    const id = request.params.id;


    const user = usersList.find(item => item._id === id);
    if (!user) {
        response.status(403).json({
            message: "User not found"
        });
        return;
    }

    //paslepiam id ir password
    response.json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        gender: user.gender,
        newsLetter: user.newsLetter
    })
};