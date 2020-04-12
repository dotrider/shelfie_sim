import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';


import './Dashboard.css'


const Dashboard = () => {

const [inventory, setInventory] = useState([])

  
useEffect(() => {
  axios.get('/api/products').then(res => {
    console.log('inventory', res.data)
    setInventory(res.data)
  }).catch(err => console.log(err))
},[])


const deleteItem = (id) => {
  axios.delete(`/api/product/${id}`).then(res => {
    setInventory(res.data)
  }).catch(err => console.log(err))
}

const mappedInventoy = inventory.map(product => {
            return <Product product={product} key={product.id} deleteItem={deleteItem}/>
        })
  return (
    <section className="dashboard">
          {mappedInventoy}
    </section>
  );
}

  export default Dashboard