import data from './sfpopos-data.json';

data.forEach((obj, index) => {
    obj.id = index
})

export default data;