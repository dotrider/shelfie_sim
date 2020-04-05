import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import './App.css';


function App() {

  const [inventory, setInventory] = useState([])

  
useEffect(() => {
  axios.get('/api/products').then(res => {
    console.log(res.data)
    setInventory(res.data)
  }).catch(err => console.log(err))
},[])

const handleDelete = (id) => {
  axios.delete(`/api/product/${id}`).then(res => {
    setInventory(res.data)
  }).catch(err => console.log(err))
}


  return (
    <div className="App">
        <Header/>
        <Dashboard inventory={inventory} handleDelete={handleDelete}/>
        <Form/>
    </div>
  );
}

export default App;
