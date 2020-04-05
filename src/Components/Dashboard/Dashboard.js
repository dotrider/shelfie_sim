import React from 'react';
import Product from '../Product/Product';
import './Dashboard.css'

const Dashboard = (props) => {


        const mappedInventoy = props.inventory.map(product => {
            return <Product product={product} key={product.id} handleDelete={props.handleDelete}/>
        })
    return(
        <section className='dashboard'>
            Dashboard
            {mappedInventoy}
        </section>
    )
}

export default Dashboard