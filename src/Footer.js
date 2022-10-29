import React from 'react';
import './Footer.css';

function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='Footer'>
            <h4>{`copyright ${year}`}</h4>
        </div>
    )
}

export default Footer;