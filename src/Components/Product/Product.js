import React from 'react';
import { Link, withRouter} from 'react-router-dom'
import './Product.css';

const Product = (props) => {
    const {name, price, img, id} = props.product
    // console.log('propsProduct',props)
    return(
        <section className='products'>
            <div className='product'>
                <img src={img}/>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={() => props.deleteItem(id)} >Delete</button>
                <Link to={`/edit/${id}`}><button>Edit</button></Link>
            </div>
        </section>
    )
}

export default withRouter(Product)