export let filtroPorSelect = (array, arraySelect) =>  array.filter(peliculas => peliculas.genres.some(genero => arraySelect.includes(genero))) 
