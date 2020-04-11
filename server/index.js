require('dotenv').config();
const express = require ('express');
const massive = require('massive');
const app = express();
const {CONNECTION_PORT, CONNECTION_STR} = process.env;
const {addProduct, getProducts, editProduct, deleteProduct} = require('./controller/controller')



app.use(express.json());
massive(CONNECTION_STR).then(db => {
    app.set('db', db)
    console.log('Connected to DB')
}).catch(err => console.log(err))



app.post('/api/product', addProduct);
app.get('/api/products/:id?', getProducts);
app.put('/api/product/:id', editProduct);
app.delete('/api/product/:id', deleteProduct);




app.listen(CONNECTION_PORT, () => console.log(`RUNNING ON ${CONNECTION_PORT}`))