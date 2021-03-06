import React, { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Form = (props) => {
    const [name, setName] = useState(''),
          [price, setPrice] = useState(0),
          [image, setImage] = useState('')

useEffect(() => {
    // console.log('props.match.params', props.match.params)
    axios.get(`/api/products/${props.match.params.id}`).then(res => {
        // console.log('useEffect form',res.data)
        setName(res.data[0].name)
        setPrice(res.data[0].price)
        setImage(res.data[0].img)
    })   
}, [props.match.params.id])


const addProduct = () => {
    // console.log('HITT addProduct!')
    axios.post('/api/product', {name, price, image}).then(() => {
        alert('Product Added')
    })
    // setName('')
    // setPrice(0)
    // setImage('')
    props.history.push('/')
    
  }


const editProduct = () => {
    // console.log('edit Hit!')
  axios.put(`/api/product/${props.match.params.id}`, {name, price, image}).then(() => {
    alert('Product Updated!')
  }).catch(res => console.log(res))
  props.history.push('/')
}  

// console.log('id', props.match.params)
// console.log('FormProps', props)
    return(
        <section className='form'>
            
            <div className='productForm'>
            {props.location.pathname === '/add'?
            (<div>
                <div className='formInfo'>
                    <p>Image:</p>
                    <input name='img' value={image} onChange={(e) => setImage(e.target.value)}/>
                    <p>Product:</p>
                    <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <p>Price:</p>
                    <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className='formBtns'>
                    <Link to='/'>
                    <button className='btn'>Cancel</button>
                    </Link>
                    <button className='addBtn btn' onClick={addProduct}>Add to Inventory</button>
                    </div>
            </div>
            )
            :
            (<div>
                <div className='formInfo'>
                <p>Image:</p>
                    <input name='img' value={image} onChange={(e) => setImage(e.target.value)}/>
                    <p>Product:</p>
                    <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <p>Price:</p>
                    <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                    <div className='formBtns'>
                    <Link to='/'>
                    <button className='btn'>Cancel</button>
                    </Link>
                    <button className='btn' onClick={editProduct}>Save</button>
                    </div>
            </div>)
            }
          </div>
      
        </section>
    )
}

export default Form