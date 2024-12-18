import express, {Request, Response} from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Endpoint untuk register user
app.post('/register', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logika untuk register user
    res.send('User registered');
});

// Endpoint untuk login user
app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logika untuk login user
    res.send('User logged in');
});

app.listen(3000, () => {
    console.log(`server start on port ${port}`);
})



