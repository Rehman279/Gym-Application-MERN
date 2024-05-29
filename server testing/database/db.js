import mongoose, { mongo } from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log("Some error occured while connecting to database:", err);
        });
};