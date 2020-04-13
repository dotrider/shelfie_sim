import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {



    return(
        <section className='header'>
           <h1>SHELFIE</h1>

           <div className='links'>
               <Link to='/'><span>Dashboard</span></Link>
                <Link to='/add'><span>Add</span></Link>
           </div>
        </section>
    )
}

export default Header