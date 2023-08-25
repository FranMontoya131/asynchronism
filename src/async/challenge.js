const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'; //<-- Cuando hay un valor que nunca se espera cambiar se establece en MAYUS

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log('daa.info.count :>> ', data.info.count);
        console.log('character.info :>> ', character.name);
        console.log('data.dimension :>> ', origin.dimension);
    } catch (error) {
        console.log('error in anotherFunction Challenge :>> ', error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');