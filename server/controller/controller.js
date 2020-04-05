
module.exports = {

    addProduct: (req, res) => {
        const { name, price , image} = req.body;
        const db = req.app.get('db');
        console.log('hit', req.body)
        db.add_product([name, price, image]).then(product => {
            res.status(200).json(product)
        })
    },

    getProducts: (req, res) => {
       const db = req.app.get('db');
        console.log('get')
       db.get_products().then(products => {
           res.status(200).json(products)
       })
    },

    editProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, image} = req.body;
        const { id } = req.params;

        db.edit_product(name, price, image, id).then(product => {
            res.status(200).json(product)
        })


    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        console.log(req.params.id)
        db.delete_product(req.params.id).then(product => {
            res.status(200).json(product)
        })

    }
}