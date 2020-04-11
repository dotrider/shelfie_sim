import React, { useState, useEffect } from 'react'

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

const editProduct = (id, product) => {
  axios.put(`/api/product/${id}`, product).then(res => {
    setInventory(res.data)
  }).catch(res => console.log(res))
}

  return (
    <div className="App">
        <Header/>
        <Dashboard inventory={inventory} deleteItem={deleteItem}/>
        <Form  inventory={inventory} addProduct={addProduct} editProduct={editProduct}/>
    </div>
  );
}

  export default Dashboard