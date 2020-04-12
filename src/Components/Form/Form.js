import React, { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Form = (props) => {
    const [name, setName] = useState(''),
          [price, setPrice] = useState(0),
          [image, setImage] = useState('')

// useEffect(() => {
//     // console.log('props', props)
//     axios.get(`/api/products/${props.match.params.id}`).then(res => {
//         console.log('form',res.data[0].name)
//         setInv(res.data[0].name,
//             res.data[0].img,
//             res.data[0].review)
//     })   
// }, [])


const addProduct = () => {
    console.log('HITT!')
    axios.post('/api/product', {name, price, image}).then(() => {
        console.log('Product Added')
    })
    // setName('')
    // setPrice(0)
    // setImage('')
    props.history.push('/')
    
  }


console.log('FormProps', props)
    return(
        <section className='form'>
            {props.location.pathname === '/add'?
            (<div>
                <p>Image:</p>
                <input name='img' value={image} onChange={(e) => setImage(e.target.value)}/>
                <p>Product:</p>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <p>Price:</p>
                <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <div>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                    <button onClick={addProduct}>Add to Inventory</button>
                </div>
            </div>)
               : (props.location.pathname === '/edit')?
            (<div>
                <p>Image:</p>
                <input name='img' value={name} onChange={(e) => setImage(e.target.value)}/>
                <p>Product:</p>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <p>Price:</p>
                <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <div>
                <Link to='/'>
                        <button>Cancel</button>
                </Link>
                    <button>Save</button>
                </div>
            </div>)
            :
            null
            } 
      
        </section>
    )
}

export default Form