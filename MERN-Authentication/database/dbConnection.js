import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_AUTHENTICATION",
    })
    .then(()=>{
        console.log("Connected to database.");
    })
    .catch((error)=>{
        console.log(`Some error occur while connecting to database: ${error}`)
    })
}