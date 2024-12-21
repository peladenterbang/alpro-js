import express,{Request, Response} from "express";
import router from "./routes/api";
import db from "./utils/database";
import bodyParser from "body-parser";


const port = 3000;

async function init(){
    try {
        await db();
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/api",router);
        app.listen(port , () => {
            console.log(`server running on port ${port}`)
        })
    } catch (error) {
        const err = error as unknown as Error
        console.log(err.message)
    }

}

init();