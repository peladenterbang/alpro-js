const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let products =[
    {id: 1, name: 'laptop', price: 1000},
    {id: 2, name: 'book', price: 250}
]

app.get('/api/products', (req,res) => {
    res.json(products);
})

app.get('/api/product/:id', (req,res) => {
    const productID = parseInt(req.params.id);
    const product = products.find(p => p.id === productID);
    if(product){
        res.json(product);
    }else{
        res.status(404).json({
            message : 'product not found'
        })
    }
})


app.post('/api/products', (req,res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
})


app.put('/api/product/:id', (req,res) => {
    const productID = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productID);
    if(productIndex !== -1){
        products[productIndex] = {id : productID, ...req.body};
        res.status(201).json(products[productIndex]);
    }else{
        res.status(404).json({message : 'product not found'});
    }
})


app.delete('/api/products/:id', (req, res) => {
    const productID = parseInt(req.params.id);
    products = products.filter(p => p.id !== productID);
    res.status(204).json({
        message:   `product deleted id ${productID}`
    });
    
})

app.listen(port, () => {
    console.log(`server port running on http://localhost:${port}`)
})