import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import Form from '../Form/Form'


import './Dashboard.css'


const Dashboard = () => {

const [inventory, setInventory] = useState([])

  
useEffect(() => {
  axios.get('/api/products').then(res => {
    console.log('inventory', res.data)
    setInventory(res.data)
  }).catch(err => console.log(err))
},[])


const addProduct = (product) => {
  axios.post('/api/product', product).then(res => {
    setInventory(res.data)
  }).catch(err => console.log(err))
}

const deleteItem = (id) => {
  axios.delete(`/api/product/${id}`).then(res => {
    setInventory(res.data)
  }).catch(err => console.log(err))
}
//Edit
// const editProduct = (id, product) => {
//   axios.put(`/api/product/${id}`, product).then(res => {
//     setInventory(res.data)
//   }).catch(res => console.log(res))
// }

const mappedInventoy = inventory.map(product => {
            return <Product product={product} key={product.id} deleteItem={deleteItem}/>
        })
  return (
    <div className="App">
        {mappedInventoy}
{/* <Form  inventory={inventory} addProduct={addProduct} editProduct={editProduct}/> */}
    </div>
  );
}

  export default Dashboard


// const Dashboard = (props) => {


//     const mappedInventoy = props.inventory.map(product => {
//         return <Product product={product} key={product.id} deleteItem={props.deleteItem}/>
//     })
// return(
//     <section className='dashboard'>
//         Dashboard
//         {mappedInventoy}
//     </section>
// )
// }

// export default Dashboard

{/* <Form  inventory={inventory} addProduct={addProduct} editProduct={editProduct}/> */}