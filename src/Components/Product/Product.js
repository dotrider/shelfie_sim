import React from 'react';

const Product = (props) => {
    const {name, price, image, id} = props.product
    return(
        <section>
            <img alt={name} src={image}/>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={props.handleDelete(id)}>Delete</button>
        </section>
    )
}

export default Product