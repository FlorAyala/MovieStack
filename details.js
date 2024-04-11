import { crearTabla, crearTabla2, crearCards2 } from "./modulo/modulo.js";
let url = new URLSearchParams(location.search)
let id = url.get('id')
let contenedorPrincipal = document.getElementById("contenedorCardsDetails")
let tabla = document.getElementById('tabla')
let tabla2 = document.getElementById('tabla2')
let movie =[]

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
        let peliculas = (array, key) => array.find(obj => obj.id === key)


        contenedorPrincipal.innerHTML = (crearCards2(peliculas(movie, id)));
        tabla.innerHTML = (crearTabla(peliculas(movie, id)));
        tabla2.innerHTML = (crearTabla2(peliculas(movie, id)));

    })
    .catch(error => console.error(error))


