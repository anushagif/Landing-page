import React from 'react';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1> <span>Launch Your Application</span>With Confidence And Creativity</h1>
                <p className='details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href='#' className='cv-btn'>Download</a>
                </div>  

        </div>
    )
}
export default Header;