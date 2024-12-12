const express = require('express');
const app = express();
const port = 3000;


let products = [
    {id: 1, name: "remote control", category: "Elektronik"},
    {id: 2, name: "panci", category: "Perabotan"},
    {id: 3, name: "tshirt", category: "Pakaian"}
]

app.use(express.json());

app.get('/api/products', (req,res) => {
    res.json(products);
})

app.get('/api/product/:id', (req, res) => {
    const productID = parseInt(req.params.id);
    const product = products.find(p => p.id === productID);
    if(product) {
        res.status(200).json(product);
    } else {
        res.status(401).json({
            message: "product not found"
        })
    }
})


app.post('/api/products', (req,res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json({
        message : `product created ${newProduct.name}`
    })
})


app.put('/api/product/:id', (req,res) => {
    const productID = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productID);
    if (productIndex !== -1){
        products[productIndex] = {id : productID , ...req.body};
        res.status(201).json({
            message : `product edited ${req.name}`
        })
    } else {
        res.status(401).json({
            message: `product not fonund id ${productID}`
        })
    }
})

app.delete('/api/product/:id', (req,res) => {
    const productID = parseInt(req.params.id);
    products = products.filter(p => p.id !== productID);
    res.status(200).json({
        message: `product deleted ${productID}`
    })
})


app.get('/api/search',(req,res) => {
    const query = req.query.q;
    const productIndex = products.findIndex(p => p.name === query);
    if(productIndex !== -1){
        res.status(200).json(
            products[productIndex]
        )
    } else {
        res.status(401).json({
            message: `product not found name ${query}`
        })
    }
})

app.listen(port, () =>{
    console.log(`server run on http://localhost:${port}`)
})