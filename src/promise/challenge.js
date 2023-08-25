const fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log('data.info.count :>> ', data.info.count);

        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log('data.name :>> ', data.name);

        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log('data.dimension :>> ', data.dimension);
    })
    .catch(error => {
        console.error(error);
    });