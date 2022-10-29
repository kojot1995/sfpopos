import React from 'react';
import data from '../../sfpopos-data.json';
import { useParams } from 'react-router-dom';

function POPOSDetails() {
  const { id } = useParams();
  const { images, title, desc, hours, features, geo } = data[id];
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>Opening hours: {hours}</p>
        <p>Features: {features.map(feature => feature + ' ')}</p>
        <p>Coordinates: {geo.lat} {geo.lon}</p>
      </div>
    </div>
  )
}

export default POPOSDetails;