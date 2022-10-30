import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
  const { name, address, image, id } = props;
  return (
    // add links to detailed pages for images and titles
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          alt=''
          width='300'
          height='300'
        />
      </Link>

      <Link to={`/details/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div>
        <h3 className='address'>Address: {address}</h3>
      </div>

    </div>
  )
}

export default POPOSSpace;