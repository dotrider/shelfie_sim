import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
    const [name, setName] = useState(''),
          [price, setPrice] = useState(0),
          [image, setImage] = useState('')


const addProduct = () => {
    axios.post('/api/product', {name, price, image})
    setName('');
    setPrice('');
    setImage('');
}

    return(
        <section className='form'>
            <p>Image:</p>
            <input name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
            <p>Product:</p>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Price:</p>
            <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div>
                <button>Cancel</button>
                <button onClick={addProduct}>Add to Inventory</button>
            </div>
        </section>
    )
}

export default Form