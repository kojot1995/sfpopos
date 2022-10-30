import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'; 

function POPOSList() {

  const [input, setInput] = useState(''); // Add React state to function component
  const spaces = data.filter(obj => obj.title.toLowerCase().includes(input.toLowerCase()) || obj.address.toLowerCase().includes(input.toLowerCase())).map((obj) => {

    return (
      <POPOSSpace 
        id={obj.id}
        key={obj.title}
        name={obj.title}
        address={obj.address}
        image={obj.images[0]}
      />
    )
  })

    return (
      <div className='POPOSList'>
        <form>
          <input 
            value={input}
            placeholder='Search for spaces...'
            onChange={e => { setInput(e.target.value)} }
          />
        </form>
        {spaces} 
      </div>
    )
}

export default POPOSList;