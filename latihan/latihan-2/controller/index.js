const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/users', (req,res) => {
    res.json([
        {id: 1, name: "alice"},
        {id: 2, name: "john"}
    ]);
});

app.get('/api/user/:id', (req,res) => {
    const userID = req.params.id;
    res.json([
        {id: userID, name: "alice"},
    ]);
});


app.post('/api/user', (req,res) => {
    const newUser = req.body;
    console.log(`user added : ${newUser.name}`);
    res.status(201).json(newUser.name);
})

app.get('/api/user/:id/posts', (req,res) => {
    const userID = req.params.id;
    const query = req.query.q;

    res.json({
        userID: userID,
        query: query,
        posts: ['post1', 'post2']
    })

})

app.get('/api/search', (req,res) => {
    const query = req.query.q;
    res.json({query: query, result: ['result1', 'result2']})
})


app.listen(port, () => {
    console.log(`server is running on <http://localhost:${port}>`);
})