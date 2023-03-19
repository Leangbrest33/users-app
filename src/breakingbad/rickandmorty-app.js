
/**
 * @returns { Promise<Object> } Character information
 */
const fetchCharacter = async() =>{

//El fetch es un metodo que ya viene en el objeto global de windows y es quien me va a servir la peticion http
   const res = await fetch('https://rickandmortyapi.com/api/character/1,183');
   const data = await res.json();


   console.log(data);

   return data;



}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMortyApp = async ( element ) =>{

   
    document.querySelector('#app-title').innerHTML = 'Rick and Morty App' 
    element.innerHTML = 'Loading...'

    // await fetchCharacter();

}