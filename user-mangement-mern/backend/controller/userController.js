import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel";

const createUser = asyncHandler(async (req, res) => {
    res.send("hello");
});

export {createUser}
