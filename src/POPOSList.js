import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

function POPOSList() {
    return (
        <div className='POPOSList'>
            <POPOSSpace
                name='California Street'
                image='image1.jpg' 
                address='50 California Street'
            />
            <POPOSSpace
                name='California Street'
                image='image2.jpg' 
                address='50 California Street'
            />
            <POPOSSpace 
                name='California Street'
                image='image3.jpg' 
                address='50 California Street'
            />
            <POPOSSpace 
                name='California Street'
                image='image4.jpg' 
                address='50 California Street'
            />
        </div>
    )
}

export default POPOSList;