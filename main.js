import { filtroPorSelect } from "./modulo/modulo.js";

//console.log(data);
let contenedorCards = document.getElementById("contenedorCards")//invoca al contenedor para despues renderisar las cards en el html
let contenedorSelect = document.getElementById('contenedorSelect')
let search = document.getElementById('search')
let boton = document.getElementById('boton')

/* ----------------------CARDS------------------------------------------ */
//crear las cards //tagline == eslogan
let crearCards = obj => `
<div class= 'flex flex-col  w-3/4 gap-3 p-3  rounded-lg md:w-1/3 lg:w-1/4 hover:scale-110 duration-700 mt-3  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
<img class=" h-1/2 object-contain " src="${obj.image}" alt="${obj.title}">
<h3 class= "font-medium pl-4 text-lg ">${obj.title}</h3>
<h4 class= "pl-4 ">${obj.tagline}</h4>
<p class="pl-4 pb-[10px]"> ${obj.overview.slice(0, 40)}...</p>
<a   href="./details.html?id=${obj.id}" class= "bg-black  text-white p-2 w-2/4 text-center rounded-xl ">See more</a>

</div>
  
`
let cards = (array) => array.length !='' ? array.map(crearCards).reduce((a, b) => a + b, '') : '<h2>there is no coincidence</h2> '



contenedorCards.innerHTML = cards(data);



/* ----------------SELECT----------------------------------------------- */


let generos = data => [... new Set(data.flatMap(movie => movie.genres))]
//console.log(generos(data)); 

let crearSelect = genero => `
<option value="${genero}">${genero}</option>
`

let select =  array =>array.map(crearSelect).reduce((a, b) => a + b, '')
contenedorSelect.innerHTML += select(generos(data))


let selecMovies = []
let peliculaIngresada = ''

contenedorSelect.addEventListener('change', e => {
    selecMovies = [...document.querySelectorAll('select')].map(select => select.value) 
    contenedorCards.innerHTML = cards(filtroPorNombre(filtroPorSelect(data,selecMovies),peliculaIngresada))
    if( selecMovies == ''){
        contenedorCards.innerHTML = cards(data);
    }
    
})


search.addEventListener('keyup', e => {
    peliculaIngresada = e.target.value
   // console.log( contenedorCards.innerHTML = cards(filtroPorNombre(filtroPorSelect(data, selecMovies), peliculaIngresada)));
    contenedorCards.innerHTML = cards( filtroPorNombre(data, peliculaIngresada))//usamos lafuncion de crearCards,  
  
})

//funcion cruzados  // hago 2 funciones independientes
//sacque el filtro de select para poder usarlo donde yo quiera
//let filtroPorSelect = (array, arraySelect) =>  array.filter(peliculas => peliculas.genres.some(value => arraySelect.includes(value))) 

let filtroPorNombre = (array, peliculaIngresada) => array.filter(peliculas => peliculas.title.toLowerCase().includes(peliculaIngresada.trim().toLowerCase()))
//saco  el nombre de la pelicula ingresa para poder usarlo donde yo quiera


