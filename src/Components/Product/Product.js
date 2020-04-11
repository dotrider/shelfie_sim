import React from 'react';
import { Link } from 'react-router-dom'
import './Product.css';

const Product = (props) => {
    const {name, price, img, id} = props.product
    // console.log('props',props)
    return(
        <section className='product'>
            <img alt='Product Image' src={img}/>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => props.deleteItem(id)} >Delete</button>
            <Link to={`/edit/${id}`}><button>Edit</button></Link> 
        </section>
    )
}

export default Product