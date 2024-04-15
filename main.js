import { filtroPorSelect, crearSelect, filtroPorNombre, renderCards } from "./modulo/modulo.js";
let contenedorCards = document.getElementById("contenedorCards")//invoca al contenedor para despues renderisar las cards en el html
let contenedorSelect = document.getElementById('contenedorSelect')
let search = document.getElementById('search')


let select = []
let movie = []
let selecMovies = []
let peliculaIngresada = ''
let movieFav = []
let movieFavorite = JSON.parse(localStorage.getItem('peliculasFavoritas'))
console.log(movieFavorite);
if (movieFavorite) {
    movieFav = movieFavorite
}

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
        
        renderCards(movie,contenedorCards)
        select = array => array.map(crearSelect).reduce((a, b) => a + b)
        contenedorSelect.innerHTML += select(generos)

        contenedorCards.addEventListener('click', e => {
            let peliculasID = e.target.dataset.peliculasId
        
            if (peliculasID) {
        
                if (!movieFav.includes(peliculasID))
                    movieFav.push(peliculasID)
                else {
                    movieFav = movieFav.filter(id => id != peliculasID)
                }
                localStorage.setItem('peliculasFavoritas', JSON.stringify(movieFav))
        
            }    
           // console.log(movieFav);
         // renderCards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada),contenedorCards)
       // console.log(renderCards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada),contenedorCards));
         renderCards(movie,contenedorCards)
         console.log(renderCards(movie,contenedorCards));
        })
        
    })
    .catch(error => console.error(error))


   


contenedorSelect.addEventListener('change', e => {
    selecMovies = [...document.querySelectorAll('select')].map(select => select.value)
     renderCards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada),contenedorCards)
    if (selecMovies == '')  renderCards(movie,contenedorCards);
})


search.addEventListener('keyup', e => {
    peliculaIngresada = e.target.value
   renderCards(filtroPorNombre(filtroPorSelect(movie, selecMovies), peliculaIngresada),contenedorCards)//usamos lafuncion de crearCards,  

})





