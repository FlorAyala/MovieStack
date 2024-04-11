 import { filtroPorSelect, crearSelect, filtroPorNombre,crearCards } from "./modulo/modulo.js";
let contenedorCards = document.getElementById("contenedorCards")//invoca al contenedor para despues renderisar las cards en el html
let contenedorSelect = document.getElementById('contenedorSelect')
let search = document.getElementById('search')
let cards = []
let select = []
let movie = []

fetch('https://moviestack.onrender.com/api/movies',
    {
        headers: {
            'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then(data => data.json())
    .then(data => {
         movie = data.movies 
        //console.log(movie);
        let generos = [... new Set(movie.map(peliculas => peliculas.genres).flat())]
        cards = array => array.length > 0  ? array.map(crearCards).reduce((a, b) => a + b) : '<h2>there is no coincidence</h2> '
        
        contenedorCards.innerHTML = cards(movie);
        select = array => array.map(crearSelect).reduce((a, b) => a + b)
        contenedorSelect.innerHTML += select(generos)
     
    })
    .catch(error => console.error(error))

 

let selecMovies = []
let peliculaIngresada = ''

contenedorSelect.addEventListener('change', e => {
   selecMovies = [...document.querySelectorAll('select')].map(select => select.value)
   contenedorCards.innerHTML = cards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada))
   if (selecMovies == '') contenedorCards.innerHTML = cards(movie);
})


search.addEventListener('keyup', e => {
   peliculaIngresada = e.target.value
   contenedorCards.innerHTML = cards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada))//usamos lafuncion de crearCards,  
}) 



