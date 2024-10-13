import mongoose from "mongoose";

const db = async () => {
    try{
        // console.log(`The URI is ${process.env.MONGO_URI}`);
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    }catch(error){
        console.log("There is an error in connecting to the database : (db.js)");
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default db;