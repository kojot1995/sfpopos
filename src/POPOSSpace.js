import React from 'react';
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, address, image, likeCount } = props;
    return (
        <div className='POPOSSpace'>
            <img 
                src={`${process.env.PUBLIC_URL}images/${image}`}
                alt=''
                width='300'
                height='300'
            />
            <h2>{name}</h2>
            <div>
                <h3 className='address'>Address: {address}</h3>
                <h4>{likeCount > 0 ? 'Likes: ' + likeCount : ''}</h4>
            </div>

        </div>
    )
}

export default POPOSSpace;