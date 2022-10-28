import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
    return (
        <div>
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