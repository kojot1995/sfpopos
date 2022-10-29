import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json';

function POPOSList() {

  const spaces = data.map(({title, address, images}, index) => {

    return (
      <POPOSSpace 
        id={index}
        key={title}
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

    return (
      <div className='POPOSList'>
        {spaces} 
      </div>
    )
}

export default POPOSList;