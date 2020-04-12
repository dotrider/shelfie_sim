import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {



    return(
        <section className='header'>
           <h1>SHELFIE</h1>
           <Link to='/'>Dashboard</Link>
           <Link to='/add'>Add</Link>
        </section>
    )
}

export default Header