import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

function POPOSList() {

    const POPOSNames = data.cachedContents.top;
    const spaces = POPOSNames.map(obj => {
        const {name, address, image} = obj;

        return (
            <POPOSSpace 
                key={name}
                name={name}
                address={address}
                image={image}
                likeCount={Math.floor(Math.random() * 10 + 1)}
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