import mongoose from "mongoose";

import {DATABASE_URL} from "./env";


const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            autoIndex: true,
            dbName: "sanber-tugas-mongoose",
            connectTimeoutMS: 10000
        });
        console.log(`database connected ...`);

    } catch (error) {
        console.log(error);
        console.log(`error connect to database`)
    }
}

export default connect;
