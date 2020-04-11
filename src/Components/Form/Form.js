import React, { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';

const Form = (props) => {
    const [name, setName] = useState(''),
          [price, setPrice] = useState(0),
          [image, setImage] = useState(''),
          [inv, setInv] = useState({})



useEffect(() => {
    // console.log('props', props)
    axios.get(`/api/products/${props.match.params.id}`).then(res => {
        console.log('form',res.data[0].name)
        setInv(res.data[0].name,
            res.data[0].img,
            res.data[0].review)
    })   
}, [])


const addProduct = () => {
    props.addProduct({name, price, image})
    setName('');
    setPrice(0);
    setImage('');
    // props.history.push('/');
}

// const editProduct = (id) => {
//     props.editProduct(id, {name, price, image})
// }


    return(
        <section className='form'>

            <div>
                <p>Image:</p>
                <input name='img' value={image} onChange={(e) => setImage(e.target.value)}/>
                <p>Product:</p>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <p>Price:</p>
                <input name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <div>
                    <button>Cancel</button>
                    <button onClick={addProduct}>Add to Inventory</button>
                </div>
            </div>
       
            <div>
                <p>Image:</p>
                <input name='img' value={inv.name} onChange={(e) => setImage(e.target.value)}/>
                <p>Product:</p>
                <input name='name' value={inv.name} onChange={(e) => setName(e.target.value)}/>
                <p>Price:</p>
                <input name='price' value={inv.price} onChange={(e) => setPrice(e.target.value)}/>
                <div>
                    <button>Cancel</button>
                    <button >Save</button>
                </div>
            </div> 
      
        </section>
    )
}

export default Form