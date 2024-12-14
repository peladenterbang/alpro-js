import express from "express";
import connect from "./utils/database";
import router from "./routes/api";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", router);

app.listen(3000, () => {
    console.log(`server start on port ${port}`);
})

