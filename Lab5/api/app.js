const express = require('express')
const app = express();
const cors = require('cors');

let products  =  require('./products.json');
let newProducts = products.map(p => ({ ...p, likes: 0 }));

const apiLog = (req, res, next) => {
  const date = new Date();
  console.log(`[${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ` 
    + req.method + " " + req.path + " ");
  next();
};


app.use(express.json());
app.use(cors());
app.use(apiLog);


app.get('/products', (req, res) => {
    res.json(newProducts);
})


app.patch('/products/:id', (req, res) => {
    let productId = parseInt(req.params.id); 
    let { amount } = req.body; 

    if (isNaN(productId) || isNaN(amount)) {
        return res.status(400).json({ status: 'ERROR', message: 'Invalid Id or amount' });
    }

    let product = newProducts.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ status: 'ERROR', message: 'Product not found' });
    }

    product.likes += amount;

    res.json({
        status: 'OK',
        message: `Updated likes for product ${productId}`,
        data: product
    });
});

app.delete('/products/:id', (req, res) => {
    let productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        return res.status(400).json({ 
            status: 'ERROR', 
            message: 'Invalid Id' 
        });
    }

    let productIndex = newProducts.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(400).json({
            status: 'ERROR',
            message: 'No product with provided Id'
        });
    }

    let deletedProduct = newProducts.splice(productIndex, 1);

    res.json({
        status: 'OK',
        message: `Removed product ${productId}`,
        data: deletedProduct
    });

});

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})
