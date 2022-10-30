import React from 'react';
import data from '../../sfpopos-data.json';
import { useParams } from 'react-router-dom';
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className='POPOSDetails'>
      <div className='POPOSDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt='San Franciso POPOS' />
      </div>
      <div className='POPOSDetails-info'>
        <h1 className='POPOSDetails-title'>{title}</h1>
        <p className='POPOSDetails-desc'>{desc}</p>
        <p className='POPOSDetails-hours'>Opening hours:<br/> {hours}</p>
        <p className='POPOSDetails-features'>Features: {features.map(feature => feature + ' ')}</p>
        <p className='POPOSDetails-geo'>Coordinates: {geo.lat} {geo.lon}</p>
      </div>
    </div>
  )
}

export default POPOSDetails;