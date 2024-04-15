import { renderCards } from "./modulo/modulo.js";
let contenedorFavoritos = document.getElementById('contenedorFav')
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
        let movieFavorite = JSON.parse(localStorage.getItem('peliculasFavoritas'))
        console.log(movieFavorite);
        let peliculas = []
        let peliculas2 = []

        if (movieFavorite !== null) {
            peliculas = movie.filter(movie => movieFavorite.includes(movie.id))
            renderCards(peliculas, contenedorFavoritos)

        }
        contenedorFavoritos.addEventListener('click', e => { ///quitar la cards completa un vez que le hagaclick al boton
            let peliculasID = e.target.dataset.peliculasId
            console.log(peliculasID);
            console.log(peliculas);
            if (peliculas) {
                peliculas2 = peliculas.filter(movie => peliculasID != movie.id)
                console.log(peliculas2);
                peliculas=peliculas2
            }
            renderCards(peliculas2, contenedorFavoritos)

        }

        )
    })
    .catch(error => console.error(error))

